<template>
  <div class="example">
    <apexcharts width="500" height="350" type="area" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
//import VueApexCharts from 'vue-apexcharts'
import VueApexCharts from '../../../dist/vue-apexcharts'

export default {
  name: 'AreaExample',
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      chartOptions: {
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
        tooltip: {
            fixed: {
                enabled: false,
                position: 'topRight'
            }
        }
      }
      ,
      series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
      }, {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
      }],
    }
  },
}
</script>
