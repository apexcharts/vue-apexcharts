import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import AreaExample from './charts/AreaExample'
import BarExample from './charts/BarExample'
import ColumnExample from './charts/ColumnExample'
import ScatterExample from './charts/ScatterExample'
import MixedExample from './charts/MixedExample'
import DonutExample from './charts/DonutExample'
import RadialBarExample from './charts/RadialBarExample'
import BubbleExample from './charts/BubbleExample'
import HeatmapExample from './charts/HeatmapExample'
import LineExample from './charts/LineExample'
import VueApexCharts from '../../dist/vue-apexcharts';

Vue.component('apexchart', VueApexCharts)

Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const routes = [
  { path: '/area', component: AreaExample },
  { path: '/bar', component: BarExample },
  { path: '/column', component: ColumnExample },
  { path: '/mixed', component: MixedExample },
  { path: '/scatter', component: ScatterExample },
  { path: '/donut', component: DonutExample },
  { path: '/radialbar', component: RadialBarExample },
  { path: '/bubble', component: BubbleExample },
  { path: '/heatmap', component: HeatmapExample },
  { path: '/line', component: LineExample }
]

const router = new VueRouter({
  routes: routes
})
router.replace('/line')


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
