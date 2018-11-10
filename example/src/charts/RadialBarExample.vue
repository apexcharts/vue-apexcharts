<template>
  <div class="example">
    <apexchart width="350" type="radialBar" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  name: 'RadialBarExample',
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
