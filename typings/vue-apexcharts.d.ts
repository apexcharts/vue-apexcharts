import Vue from 'vue';
import ApexCharts, { ApexOptions } from 'apexcharts';

interface VueApexCharts extends Vue {
  // data
  readonly chart?: ApexCharts;
  // props
  options?: ApexOptions;
  type?: 'line' | 'area' | 'bar' | 'histogram' | 'pie' | 'donut' | 'radialBar' | 'scatter' | 'bubble' | 'heatmap' | 'candlestick' | 'radar';
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  width?: string | number;
  height?: string | number;
  // method
}

declare namespace VueApexCharts {
  function install(app: typeof Vue): void;
}

export default VueApexCharts;

declare module 'vue/types/vue' {
  interface Vue {
    $apexcharts: typeof ApexCharts;
  }
}
