import ApexCharts from 'apexcharts'

export default {
  props: {
    options: {
      type: Object
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
  created () {
    this.$watch('options', options => {
      if (!this.chart && options) {
        this.init()
      } else {
        this.chart.updateOptions(this.options);
      }
    })

    this.$watch('series', series => {
      if (!this.chart && series) {
        this.init()
      } else {
        this.chart.updateSeries(this.series);
      }
    }, { deep: true })

    let watched = ['type', 'width', 'height']
    watched.forEach(prop => {
      this.$watch(prop, () => {
        this.refresh()
      })
    })
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

      const config = ApexCharts.merge(this.options, newOptions);
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
    updateSeries(newSeries, animate) {
      this.chart.updateSeries(newSeries, animate)
    },
    updateOptions(newOptions, redrawPaths, animate) {
      this.chart.updateOptions(newOptions, redrawPaths, animate)
    },
    toggleSeries(seriesName) {
      this.chart.toggleSeries(seriesName)
    },
    appendData(newData) {
      this.chart.appendData(newData)
    },
    addText(options) {
      this.chart.addText(options)
    },
    addXaxisAnnotation(options, pushToMemory) {
      this.chart.addXaxisAnnotation(options, pushToMemory)
    },
    addYaxisAnnotation(options, pushToMemory) {
      this.chart.addYaxisAnnotation(options, pushToMemory)
    },
    addPointAnnotation(options, pushToMemory) {
      this.chart.addPointAnnotation(options, pushToMemory)
    },
    clearAnnotations() {
      this.chart.clearAnnotations()
    }
  }
}
