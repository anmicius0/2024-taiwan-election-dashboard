<template>
  <div
    class="flex flex-col rounded-xl border-2 border-green-300 px-2 py-5 text-center"
  >
    <h2 class="py-4 text-xl font-medium">Sources</h2>
    <div
      class="flex flex-wrap justify-between px-6 md:w-full md:flex-row md:px-12"
    >
      <div
        v-for="(item, key) in state"
        :key="key"
        class="w-1/3 py-3 text-center"
      >
        <q-toggle
          :id="item.code"
          :label="item.name"
          v-model="item.value"
          color="primary"
          class="my-3"
          left-label
          :aria-label="item.name"
        />
      </div>
    </div>
  </div>

  <div class="h-96 w-full overflow-scroll">
    <div id="myChart" class="h-full md:w-full" style="width: 200vw"></div>
  </div>
</template>

<script setup lang="ts">
import { defaultSources } from "~/utils/pollingSources";
import * as echarts from "echarts";
import { useChart } from "~/composables/useChart";
import p3 from "assets/p3.json";

const state = reactive(defaultSources);
const filter = computed(() => getFilter(state));
const chartData = computed(() => getData(p3, filter.value));

const { initChart } = useChart();
let myChart: echarts.EChartsType | null = null;

onMounted(() => {
  myChart = initChart("myChart");
  if (myChart) {
    drawChart(myChart, chartData.value);
    watch(chartData, (newData) => {
      drawChart(myChart!, newData);
    });
  }
});
</script>
