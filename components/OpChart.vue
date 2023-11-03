<template>
  <UForm
    :state="state"
    class="flex flex-wrap justify-between px-6 md:w-full md:flex-row md:px-12"
  >
    <UFormGroup
      v-for="(item, key) in state"
      :name="key"
      :key="key"
      class="w-1/3 py-3 text-center"
    >
      <template #description>
        {{ item.name }}
      </template>

      <UToggle
        color="primary"
        :value="item.value.toString()"
        v-model="item.value"
      />
    </UFormGroup>
  </UForm>

  <div class="h-96 w-full overflow-scroll">
    <div id="myChart" class="h-full md:w-full" style="width: 200vw"></div>
  </div>
</template>

<script setup>
import * as echarts from "echarts/core";
import { LineChart, ScatterChart } from "echarts/charts";
import { TooltipComponent, DatasetComponent } from "echarts/components";
import { SVGRenderer } from "echarts/renderers";
import { debounce } from "lodash-es"; // Import debounce function
import p4 from "/assets/p4.json";
const { t } = useI18n();

// States
const state = reactive({
  formosa: {
    name: t("components.opchart.filters.formosa"),
    code: "美麗島",
    value: true,
  },
  cnews: {
    name: t("components.opchart.filters.cnews"),
    code: "匯流",
    value: true,
  },
  newtalk: {
    name: t("components.opchart.filters."),
    code: "新頭殼",
    value: true,
  },
  ettoday: {
    name: t("components.opchart.filters.ettoday"),
    code: "ETtoday",
    value: true,
  },
  tpof: {
    name: t("components.opchart.filters.tpof"),
    code: "台灣民意基金會",
    value: true,
  },
  tvbs: {
    name: t("components.opchart.filters.tvbs"),
    code: "TVBS",
    value: true,
  },
});
const filter = computed(() => getFilter(state));
const chartData = computed(() => getData(p4, filter.value));

let myChart;

onMounted(() => {
  echarts.use([
    LineChart,
    ScatterChart,
    TooltipComponent,
    DatasetComponent,
    SVGRenderer,
  ]);

  myChart = echarts.init(document.getElementById("myChart"));
  drawChart(myChart, chartData.value);

  const resizeObserver = new ResizeObserver(
    debounce(() => {
      myChart.resize();
    }, 300),
  ); // Debounce resize events
  resizeObserver.observe(document.getElementById("myChart"));

  watch(chartData, (newData) => {
    drawChart(myChart, newData);
  });
});

onUnmounted(() => {
  if (myChart) {
    myChart.dispose();
  }
});
</script>
