(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('apexcharts')) :
  typeof define === 'function' && define.amd ? define(['apexcharts'], factory) :
  (global.VueApexCharts = factory(global.ApexCharts));
}(this, (function (ApexCharts) { 'use strict';

  ApexCharts = ApexCharts && ApexCharts.hasOwnProperty('default') ? ApexCharts['default'] : ApexCharts;

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
    created () {
      this.$watch('options', options => {
        if (!this.chart && options) {
          this.init();
        } else {
          this.chart.updateOptions(this.options, true);
        }
      });

      this.$watch('series', series => {
        if (!this.chart && series) {
          this.init();
        } else {
          this.chart.updateSeries(this.series, true);
        }
      }, { deep: true });

      let watched = ['type', 'width', 'height'];
      watched.forEach(prop => {
        this.$watch(prop, () => {
          this.refresh();
        });
      });
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

        const config = ApexCharts.merge(this.options, newOptions);
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
