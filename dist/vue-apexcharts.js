(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('apexcharts/dist/apexcharts.min')) :
  typeof define === 'function' && define.amd ? define(['apexcharts/dist/apexcharts.min'], factory) :
  (global.VueApexCharts = factory(global.ApexCharts));
}(this, (function (ApexCharts) { 'use strict';

  ApexCharts = ApexCharts && ApexCharts.hasOwnProperty('default') ? ApexCharts['default'] : ApexCharts;

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var ApexChartsComponent = {
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
        default: function _default() {
          return [];
        }
      },
      width: {
        default: "100%"
      },
      height: {
        default: "auto"
      }
    },
    data: function data() {
      return {
        chart: null
      };
    },
    beforeMount: function beforeMount() {
      window.ApexCharts = ApexCharts;
    },
    mounted: function mounted() {
      this.init();
    },
    created: function created() {
      var _this = this;

      this.$watch("options", function (options) {
        if (!_this.chart && options) {
          _this.init();
        } else {
          _this.chart.updateOptions(_this.options);
        }
      });
      this.$watch("series", function (series) {
        if (!_this.chart && series) {
          _this.init();
        } else {
          _this.chart.updateSeries(_this.series);
        }
      });
      var watched = ["type", "width", "height"];
      watched.forEach(function (prop) {
        _this.$watch(prop, function () {
          _this.refresh();
        });
      });
    },
    beforeDestroy: function beforeDestroy() {
      if (!this.chart) {
        return;
      }

      this.destroy();
    },
    render: function render(createElement) {
      return createElement("div");
    },
    methods: {
      init: function init() {
        var _this2 = this;

        var newOptions = {
          chart: {
            type: this.type || this.options.chart.type || "line",
            height: this.height,
            width: this.width,
            events: {}
          },
          series: this.series
        };
        Object.keys(this.$listeners).forEach(function (evt) {
          newOptions.chart.events[evt] = _this2.$listeners[evt];
        });
        var config = this.extend(this.options, newOptions);
        this.chart = new ApexCharts(this.$el, config);
        return this.chart.render();
      },
      isObject: function isObject(item) {
        return item && _typeof(item) === "object" && !Array.isArray(item) && item != null;
      },
      extend: function extend(target, source) {
        var _this3 = this;

        if (typeof Object.assign !== "function") {
          (function () {
            Object.assign = function (target) {
              // We must check against these specific cases.
              if (target === undefined || target === null) {
                throw new TypeError("Cannot convert undefined or null to object");
              }

              var output = Object(target);

              for (var index = 1; index < arguments.length; index++) {
                var _source = arguments[index];

                if (_source !== undefined && _source !== null) {
                  for (var nextKey in _source) {
                    if (_source.hasOwnProperty(nextKey)) {
                      output[nextKey] = _source[nextKey];
                    }
                  }
                }
              }

              return output;
            };
          })();
        }

        var output = Object.assign({}, target);

        if (this.isObject(target) && this.isObject(source)) {
          Object.keys(source).forEach(function (key) {
            if (_this3.isObject(source[key])) {
              if (!(key in target)) {
                Object.assign(output, _defineProperty({}, key, source[key]));
              } else {
                output[key] = _this3.extend(target[key], source[key]);
              }
            } else {
              Object.assign(output, _defineProperty({}, key, source[key]));
            }
          });
        }

        return output;
      },
      refresh: function refresh() {
        this.destroy();
        return this.init();
      },
      destroy: function destroy() {
        this.chart.destroy();
      },
      updateSeries: function updateSeries(newSeries, animate) {
        return this.chart.updateSeries(newSeries, animate);
      },
      updateOptions: function updateOptions(newOptions, redrawPaths, animate, updateSyncedCharts) {
        return this.chart.updateOptions(newOptions, redrawPaths, animate, updateSyncedCharts);
      },
      toggleSeries: function toggleSeries(seriesName) {
        return this.chart.toggleSeries(seriesName);
      },
      showSeries: function showSeries(seriesName) {
        this.chart.showSeries(seriesName);
      },
      hideSeries: function hideSeries(seriesName) {
        this.chart.hideSeries(seriesName);
      },
      appendSeries: function appendSeries(newSeries, animate) {
        return this.chart.appendSeries(newSeries, animate);
      },
      resetSeries: function resetSeries() {
        this.chart.resetSeries();
      },
      zoomX: function zoomX(min, max) {
        this.chart.zoomX(min, max);
      },
      toggleDataPointSelection: function toggleDataPointSelection(seriesIndex, dataPointIndex) {
        this.chart.toggleDataPointSelection(seriesIndex, dataPointIndex);
      },
      appendData: function appendData(newData) {
        return this.chart.appendData(newData);
      },
      addText: function addText(options) {
        this.chart.addText(options);
      },
      addImage: function addImage(options) {
        this.chart.addImage(options);
      },
      addShape: function addShape(options) {
        this.chart.addShape(options);
      },
      dataURI: function dataURI() {
        return this.chart.dataURI();
      },
      setLocale: function setLocale(localeName) {
        return this.chart.setLocale(localeName);
      },
      addXaxisAnnotation: function addXaxisAnnotation(options, pushToMemory) {
        this.chart.addXaxisAnnotation(options, pushToMemory);
      },
      addYaxisAnnotation: function addYaxisAnnotation(options, pushToMemory) {
        this.chart.addYaxisAnnotation(options, pushToMemory);
      },
      addPointAnnotation: function addPointAnnotation(options, pushToMemory) {
        this.chart.addPointAnnotation(options, pushToMemory);
      },
      removeAnnotation: function removeAnnotation(id, options) {
        this.chart.removeAnnotation(id, options);
      },
      clearAnnotations: function clearAnnotations() {
        this.chart.clearAnnotations();
      }
    }
  };

  var VueApexCharts = ApexChartsComponent;
  window.ApexCharts = ApexCharts;

  VueApexCharts.install = function (Vue) {
    //adding a global method or property
    Vue.ApexCharts = ApexCharts;
    window.ApexCharts = ApexCharts; // add the instance method

    Object.defineProperty(Vue.prototype, '$apexcharts', {
      get: function get() {
        return ApexCharts;
      }
    });
  };

  return VueApexCharts;

})));
