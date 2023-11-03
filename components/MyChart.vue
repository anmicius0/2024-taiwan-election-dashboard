<template>
  <div class="h-96 w-full overflow-scroll">
    <div id="myChart" class="h-full md:w-full" style="width: 200vw"></div>
  </div>
</template>

<script setup>
import p4 from "assets/p4.json";
import a4 from "assets/a4.json";
import color from "assets/color.json";
import * as echarts from "echarts";
const { t } = useI18n();

onMounted(() => {
  var myChart = echarts.init(document.getElementById("myChart"));
  const container = document.getElementById("myChart");
  const resizeObserver = new ResizeObserver(() => {
    myChart.resize();
  });
  resizeObserver.observe(container);

  const parties = ["dpp", "tpp", "kmt", "gtm"];

  const createDataset = (type, name) => {
    if (type === "scatter") {
      return {
        type,
        data: p4.map((d) => [d.date, d[name]]),
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
        data: a4.map((d) => [d.date, d[name]]),
        name: t(`candidates.${name}`),
        showSymbol: false,
        itemStyle: {
          color: color[name],
        },
        smooth: true,
      };
    }
  };

  const data = parties.flatMap((name) => [
    createDataset("line", name),
    createDataset("scatter", name),
  ]);

  myChart.setOption({
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
});
</script>

<style lang="scss" scoped></style>
