<template>
  <div class="overflow-scroll">
    <div class="md:h-auto md:w-full" style="width: 200vw">
      <canvas id="myChart"></canvas>
    </div>
  </div>
</template>

<script setup>
import { Chart, Interaction } from "chart.js/auto";
import p4 from "assets/p4.json";
import a4 from "assets/a4.json";
import color from "assets/color.json";
import "chartjs-adapter-date-fns";
import { CrosshairPlugin, Interpolate } from "chartjs-plugin-crosshair";

onMounted(() => {
  const ctx = document.getElementById("myChart").getContext("2d");

  const parties = ["dpp", "tpp", "kmt", "gtm"];

  const createDataset = (type, name) => ({
    type,
    label: type === "scatter" ? `${name}_scatter` : name,
    data: (type === "scatter" ? p4 : a4).map((d) => ({
      x: d.date,
      y: d[name],
    })),
    backgroundColor: `rgba(${color[name].r},${color[name].g},${
      color[name].b
    }, ${type === "scatter" ? 0.3 : 1})`,
    borderColor: `rgba(${color[name].r},${color[name].g},${color[name].b}, ${
      type === "scatter" ? 0.3 : 1
    })`,
    pointRadius: type === "scatter" ? 1.5 : 0,
    borderWidth: 2,
    tension: 0,
  });

  const data = {
    datasets: parties.flatMap((name) => [
      createDataset("line", name),
      createDataset("scatter", name),
    ]),
  };

  const config = {
    data: data,
    options: {
      aspectRatio: 1.6,
      interaction: {
        mode: "interpolate",
        intersect: false,
        axis: "x",
      },
      tooltip: {
        mode: "interpolate",
        filter: function (tooltipItem, data) {
          let label = data.labels[tooltipItem.index];
          return !label.includes("scatter");
        },
      },
      hover: {
        intersect: false,
      },
      scales: {
        x: {
          type: "time",
          time: {
            unit: "day",
          },
          max: new Date("2024-01-13"),
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: true,
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            filter: (item) => !item.text.includes("scatter"),
          },
        },
        crosshair: {
          line: {
            color: "#000000",
            width: 1,
          },
        },
      },
    },
  };

  Chart.register(CrosshairPlugin);
  Interaction.modes.interpolate = Interpolate;

  new Chart(ctx, config);
});
</script>

<style lang="scss" scoped></style>
