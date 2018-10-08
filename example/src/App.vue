<template>
  <div id="app">

    <p>
      <router-link to="/area">Area Chart</router-link>
      <router-link to="/line">Line Chart</router-link>
      <router-link to="/bar">Bar Chart</router-link>
      <router-link to="/column">Column Chart</router-link>
      <router-link to="/mixed">Mixed Chart</router-link>
      <router-link to="/donut">Donut Chart</router-link>
      <router-link to="/radialbar">RadialBar Chart</router-link>
      <router-link to="/bubble">Bubble Chart</router-link>
      <router-link to="/scatter">Scatter Chart</router-link>
      <router-link to="/heatmap">Heatmap Chart</router-link>
    </p>

    <router-view></router-view>

  </div>
</template>

<script>


export default {
  name: 'app',
}
</script>

<style>
a {
  display: inline-block;
  margin: 5px;
  border: 1px solid #ddd;
  background: #eee;
  box-shadow: 2px 3px 4px -3px #ccc;
  color: #222;
  padding: 4px 10px;
  text-decoration: none;
}

.router-link-active {
  color: #fff;
  background: #419EF7;
}

#app {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.apexcharts-canvas {
  margin: 0 auto;
}
</style>

