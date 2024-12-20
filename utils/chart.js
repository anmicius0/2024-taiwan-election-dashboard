const OPTIONS = ["dpp", "kmt", "tpp", "undecided"];

const calculateMovingAverage = (polls, windowSize = 7) => {
  // Use Map for grouping polls by date
  const groupedPolls = new Map();
  polls.forEach((poll) => {
    if (!groupedPolls.has(poll.date)) {
      groupedPolls.set(poll.date, []);
    }
    groupedPolls.get(poll.date).push(poll);
  });

  // Calculate daily averages
  const dailyAverages = [];
  groupedPolls.forEach((datePolls, date) => {
    const sums = {};
    datePolls.forEach((poll) => {
      OPTIONS.forEach((key) => {
        sums[key] = (sums[key] || 0) + poll[key];
      });
    });

    const averages = { date: date.split("T")[0] };
    OPTIONS.forEach((key) => {
      averages[key] = sums[key] / datePolls.length;
    });

    dailyAverages.push(averages);
  });

  // Sort by date
  dailyAverages.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Calculate the moving average
  const movingAverages = dailyAverages.map((_, index, array) => {
    const start = Math.max(0, index - windowSize + 1);
    const end = index + 1;
    const slice = array.slice(start, end);

    const movingAvg = { date: array[index].date };
    OPTIONS.forEach((key) => {
      movingAvg[key] =
        slice.reduce((sum, current) => sum + current[key], 0) / slice.length;
    });

    return movingAvg;
  });

  const voteShare = movingAverages.map((entry) => {
    const base = entry.dpp + entry.kmt + entry.tpp;
    OPTIONS.forEach((key) => {
      entry[key] = (entry[key] / base) * 100;
    });

    return entry;
  });

  return voteShare;
};

export const drawChart = (chart, data) => {
  chart.setOption({
    tooltip: {
      trigger: "axis",
      valueFormatter: (value) => parseFloat(value).toFixed(1) + "%",
    },
    xAxis: {
      type: "time",
      axisPointer: { show: true },
      max: "2024-1-13",
    },
    yAxis: {},
    series: data,
  });
};

import color from "assets/color.json";

const createDataset = (data, type, name) => {
  if (type === "scatter") {
    return {
      type,
      data: data.map((d) => [d.date, d[name]]),
      itemStyle: {
        color: color[name],
        opacity: 0.2,
      },
      symbolSize: 5,
      tooltip: {
        show: false,
      },
    };
  } else if (type === "line") {
    return {
      type,
      data: data.map((d) => [d.date, d[name]]),
      name: name,
      showSymbol: false,
      itemStyle: {
        color: color[name],
      },
      smooth: true,
    };
  }
};

export const getData = (data, filter) => {
  const pdata = data.filter((item) => !filter.includes(item.institution));
  const adata = calculateMovingAverage(pdata, 7);

  return ["dpp", "tpp", "kmt"].flatMap((name) => [
    createDataset(adata, "line", name),
    createDataset(pdata, "scatter", name),
  ]);
};

export const getFilter = (state) => {
  let temp = [];
  for (const i in state) {
    if (!state[i].value) {
      temp.push(state[i].code);
    }
  }

  return temp;
};
