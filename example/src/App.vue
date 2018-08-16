<template>
  <div id="app">
    <div class="select">
      <select name="slct" id="slct" v-model="chartSelected">
        <option value="" disabled>Choose an option</option>
        <option value="line">Line</option>
        <option value="area">Area</option>
        <option value="column">Column</option>
        <option value="bar">Bar</option>
        <option value="bubble">Bubble</option>
        <option value="scatter">Scatter</option>
        <option value="heatmap">Heatmap</option>
      </select>
    </div>

    <AreaExample v-if="chartSelected === 'area'"  />
    <BarExample v-if="chartSelected === 'bar'"  />
    <BubbleExample v-if="chartSelected === 'bubble'"  />
    <ColumnExample v-if="chartSelected === 'column'" />
    <HeatmapExample v-if="chartSelected === 'heatmap'"  />
    <ScatterExample v-if="chartSelected === 'scatter'"  />
    <LineExample v-if="chartSelected === 'line'"  />
  </div>
</template>

<script>
import AreaExample from './charts/AreaExample.vue'
import BarExample from './charts/BarExample.vue'
import ColumnExample from './charts/ColumnExample.vue'
import ScatterExample from './charts/ScatterExample.vue'
import BubbleExample from './charts/BubbleExample.vue'
import HeatmapExample from './charts/HeatmapExample.vue'
import LineExample from './charts/LineExample.vue'

export default {
  name: 'app',
  components: {
    ColumnExample,
    AreaExample,
    BarExample,
    ScatterExample,
    BubbleExample,
    HeatmapExample,
    LineExample
  },
  data: function() {
    return {
      chartSelected: 'column'
    }
  },
}
</script>

<style>

h1 {
  text-align: center;
}
/* Reset Select */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #2c3e50;
  background-image: none;
}
/* Custom Select */
.select {
  position: relative;
  display: block;
  width: 20em;
  height: 3em;
  line-height: 3;
  background: #2c3e50;
  overflow: hidden;
  border-radius: .25em;
}
select {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 0 0 .5em;
  color: #fff;
  cursor: pointer;
}
select::-ms-expand {
  display: none;
}
/* Arrow */
.select::after {
  content: '\25BC';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0 1em;
  background: #34495e;
  pointer-events: none;
}
/* Transition */
.select:hover::after {
  color: #f39c12;
}
.select::after {
  -webkit-transition: .25s all ease;
  -o-transition: .25s all ease;
  transition: .25s all ease;
}
</style>

