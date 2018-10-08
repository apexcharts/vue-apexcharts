<template>
  <div class="example">
    <apexcharts width="350" type="radialBar" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
//import VueApexCharts from 'vue-apexcharts'
import VueApexCharts from '../../../dist/vue-apexcharts'

export default {
  name: 'RadialBarExample',
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      chartOptions: {
        labels: ["Percent"],
      },
      series: [81],
    }
  },
}
</script>
