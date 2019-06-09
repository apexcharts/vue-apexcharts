import Vue, { Component, ComponentOptions } from 'vue';
import { PluginObject } from 'vue/types/plugin';
import ApexCharts, { ApexOptions } from 'apexcharts';

interface VueApexChartsComponent extends Vue {
  // data
  readonly chart?: ApexCharts;
  // props
  options?: ApexOptions;
  type?: 'line' | 'area' | 'bar' | 'histogram' | 'pie' | 'donut' | 'radialBar' | 'scatter' | 'bubble' | 'heatmap' | 'candlestick' | 'radar';
  series: any;
  width?: string | number;
  height?: string | number;
  // method
  init(): void;
  refresh(): void;
  destroy(): void;
  updateOptions(options: any, redrawPaths?: boolean, animate?: boolean): void;
  updateSeries(newSeries: any, animate: boolean): void;
  toggleSeries(seriesName: string): void;
  resetSeries(): void;
  toggleDataPointSelection(seriesIndex: number, dataPointIndex?: number): any;
  appendData(newData: any): void;
  addText(options: any, pushToMemory?: boolean, context?: any): void;
  addXaxisAnnotation(options: any, pushToMemory?: boolean, context?: any): void;
  addYaxisAnnotation(options: any, pushToMemory?: boolean, context?: any): void;
  addPointAnnotation(options: any, pushToMemory?: boolean, context?: any): void;
  clearAnnotations(): void;
  dataURI(): Promise<string>;
}

declare const VueApexCharts: Component & ComponentOptions<Vue> & PluginObject<any>;

export default VueApexCharts;

declare module 'vue/types/vue' {
  interface Vue {
    $apexcharts: typeof ApexCharts;
  }
}
