import * as echarts from "echarts/core";
import { LineChart, ScatterChart } from "echarts/charts";
import { TooltipComponent, DatasetComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { debounce } from "lodash-es";

echarts.use([
  LineChart,
  ScatterChart,
  TooltipComponent,
  DatasetComponent,
  CanvasRenderer,
]);

export function useChart() {
  let chart: echarts.ECharts | null = null;
  let resizeObserver: ResizeObserver | null = null;

  const initChart = (elementId: string) => {
    try {
      const element = document.getElementById(elementId);
      if (!element) throw new Error(`Element with id ${elementId} not found`);

      chart = echarts.init(element);

      resizeObserver = new ResizeObserver(
        debounce(() => {
          chart?.resize();
        }, 300),
      );
      resizeObserver.observe(element);

      return chart;
    } catch (error) {
      console.error("Failed to initialize chart:", error);
      return null;
    }
  };

  onUnmounted(() => {
    if (chart) {
      chart.dispose();
    }
    if (resizeObserver) {
      resizeObserver.disconnect();
    }
  });

  return {
    initChart,
  };
}
