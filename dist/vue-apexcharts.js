(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('apexcharts')) :
  typeof define === 'function' && define.amd ? define(['apexcharts'], factory) :
  (global.VueApexCharts = factory(global.ApexCharts));
}(this, (function (ApexCharts) { 'use strict';

  ApexCharts = ApexCharts && ApexCharts.hasOwnProperty('default') ? ApexCharts['default'] : ApexCharts;

  class Utils {

    static isObject(item) {
      return (item && typeof item === 'object' && !Array.isArray(item) && item !== null)
    }

    static extend(target, source) {
      if (typeof Object.assign !== 'function') {
        (function() {
          Object.assign = function(target) {
            // We must check against these specific cases.
            if (target === undefined || target === null) {
              throw new TypeError('Cannot convert undefined or null to object')
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
            return output
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
      return output
    }
  }

  var ApexChartsComponent = {
    props: {
      options: {
        type: Object,
        required: true
      },
      type: {
        type: String,
        required: true,
        default: 'line'
      },
      series: {
        type: Array,
        required: true,
        default: []
      },
      width: {
        default: '100%'
      },
      height: {
        default: 'auto'
      }
    },
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      this.init();
    },
    watch: {
      series: {
        handler: function () {
          if (!this.chart) {
            this.init();
          } else {
            this.chart.updateSeries(this.series, true);
          }
        },
        deep: true
      },
      options: {
        handler: function () {
          if (!this.chart) {
            this.init();
          } else {
            this.chart.updateOptions(this.options, true);
          }
        },
        deep: true
      }

    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.destroy();
    },
    render(createElement) {
  		return createElement('div');		
  	},
    methods: {
      init() {
        const newOptions = {
          chart: {
            type: this.type,
            height: this.height,
            width: this.width
          },
          series: this.series
        };

        const config = Utils.extend(this.options, newOptions);
        this.chart = new ApexCharts(this.$el, config);
        this.chart.render();
      },
      refresh() {
        this.destroy();
        this.init();
      },
      destroy() {
        this.chart.destroy();
      },
      updateSeries() {
        this.$emit('updateSeries');
      },
      updateOptions() {
        this.$emit('updateOptions');
      }
    }
  };

  const VueApexCharts = ApexChartsComponent;

  VueApexCharts.install = function (Vue) {
      //adding a global method or property
      Vue.ApexCharts = ApexCharts;
    
      // add the instance method
      Object.defineProperty(Vue.prototype, '$apexcharts', {
          get: function get() {
              return ApexCharts
          }
      });
  };

  return VueApexCharts;

})));
