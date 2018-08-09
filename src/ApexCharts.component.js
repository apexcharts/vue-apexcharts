import ApexCharts from 'apexcharts'
import Utils from './Utils'

export default {
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
    this.init()
  },
  watch: {
    series: {
      handler: function () {
        if (!this.chart) {
          this.init()
        } else {
          this.chart.updateSeries(this.series, true)
        }
      },
      deep: true
    },
    options: {
      handler: function () {
        if (!this.chart) {
          this.init()
        } else {
          this.chart.updateOptions(this.options, true)
        }
      },
      deep: true
    }

  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.destroy()
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
      }

      const config = Utils.extend(this.options, newOptions);
      this.chart = new ApexCharts(this.$el, config)
      this.chart.render()
    },
    refresh() {
      this.destroy()
      this.init()
    },
    destroy() {
      this.chart.destroy()
    },
    updateSeries() {
      this.$emit('updateSeries')
    },
    updateOptions() {
      this.$emit('updateOptions')
    }
  }
}