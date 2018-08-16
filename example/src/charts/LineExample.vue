<template>
  <div class="example">
    <apexcharts width="500" height="350" type="line" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
//import VueApexCharts from 'vue-apexcharts'
import VueApexCharts from '../../../dist/vue-apexcharts'

export default {
  name: 'LineExample',
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      chartOptions: {
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  },
}
</script>
