import ApexCharts from "apexcharts/dist/apexcharts.min";

export default {
  props: {
    options: {
      type: Object
    },
    type: {
      type: String
    },
    series: {
      type: Array,
      required: true,
      default: () => []
    },
    width: {
      default: "100%"
    },
    height: {
      default: "auto"
    }
  },
  data() {
    return {
      chart: null
    };
  },
  beforeMount() {
    window.ApexCharts = ApexCharts;
  },
  mounted() {
    this.init();
  },
  created() {
    this.$watch("options", options => {
      if (!this.chart && options) {
        this.init();
      } else {
        this.chart.updateOptions(this.options);
      }
    });

    this.$watch("series", series => {
      if (!this.chart && series) {
        this.init();
      } else {
        this.chart.updateSeries(this.series);
      }
    });
    let watched = ["type", "width", "height"];
    watched.forEach(prop => {
      this.$watch(prop, () => {
        this.refresh();
      });
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.destroy();
  },
  render(createElement) {
    return createElement("div");
  },
  methods: {
    init() {
      const newOptions = {
        chart: {
          type: this.type || this.options.chart.type || "line",
          height: this.height,
          width: this.width,
          events: {}
        },
        series: this.series
      };

      Object.keys(this.$listeners).forEach(evt => {
        newOptions.chart.events[evt] = this.$listeners[evt];
      });

      const config = this.extend(this.options, newOptions);
      this.chart = new ApexCharts(this.$el, config);
      return this.chart.render();
    },
    isObject(item) {
      return (
        item && typeof item === "object" && !Array.isArray(item) && item != null
      );
    },
    extend(target, source) {
      if (typeof Object.assign !== "function") {
        (function() {
          Object.assign = function(target) {
            // We must check against these specific cases.
            if (target === undefined || target === null) {
              throw new TypeError("Cannot convert undefined or null to object");
            }

            let output = Object(target);
            for (let index = 1; index < arguments.length; index++) {
              let source = arguments[index];
              if (source !== undefined && source !== null) {
                for (let nextKey in source) {
                  if (source.hasOwnProperty(nextKey)) {
                    output[nextKey] = source[nextKey];
                  }
                }
              }
            }
            return output;
          };
        })();
      }

      let output = Object.assign({}, target);
      if (this.isObject(target) && this.isObject(source)) {
        Object.keys(source).forEach(key => {
          if (this.isObject(source[key])) {
            if (!(key in target)) {
              Object.assign(output, {
                [key]: source[key]
              });
            } else {
              output[key] = this.extend(target[key], source[key]);
            }
          } else {
            Object.assign(output, {
              [key]: source[key]
            });
          }
        });
      }
      return output;
    },
    refresh() {
      this.destroy();
      return this.init();
    },
    destroy() {
      this.chart.destroy();
    },
    updateSeries(newSeries, animate) {
      return this.chart.updateSeries(newSeries, animate);
    },
    updateOptions(newOptions, redrawPaths, animate, updateSyncedCharts) {
      return this.chart.updateOptions(
        newOptions,
        redrawPaths,
        animate,
        updateSyncedCharts
      );
    },
    toggleSeries(seriesName) {
      return this.chart.toggleSeries(seriesName);
    },
    showSeries(seriesName) {
      this.chart.showSeries(seriesName);
    },
    hideSeries(seriesName) {
      this.chart.hideSeries(seriesName);
    },
    appendSeries(newSeries, animate) {
      return this.chart.appendSeries(newSeries, animate);
    },
    resetSeries() {
      this.chart.resetSeries();
    },
    zoomX(min, max) {
      this.chart.zoomX(min, max)
    },
    toggleDataPointSelection(seriesIndex, dataPointIndex) {
      this.chart.toggleDataPointSelection(seriesIndex, dataPointIndex);
    },
    appendData(newData) {
      return this.chart.appendData(newData);
    },
    addText(options) {
      this.chart.addText(options);
    },
    addImage(options) {
      this.chart.addImage(options);
    },
    addShape(options) {
      this.chart.addShape(options);
    },
    dataURI() {
      return this.chart.dataURI();
    },
    setLocale(localeName) {
      return this.chart.setLocale(localeName);
    },
    addXaxisAnnotation(options, pushToMemory) {
      this.chart.addXaxisAnnotation(options, pushToMemory);
    },
    addYaxisAnnotation(options, pushToMemory) {
      this.chart.addYaxisAnnotation(options, pushToMemory);
    },
    addPointAnnotation(options, pushToMemory) {
      this.chart.addPointAnnotation(options, pushToMemory);
    },
    removeAnnotation(id, options) {
      this.chart.removeAnnotation(id, options);
    },
    clearAnnotations() {
      this.chart.clearAnnotations();
    }
  }
};
