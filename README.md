<p align="center"><img src="https://apexcharts.com/media/vue-apexcharts.png"></p>

<p align="center">
  <a href="https://github.com/apexcharts/vue-apexcharts/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-MIT-brightgreen.svg" alt="License"></a>
  <a href="https://travis-ci.com/apexcharts/vue-apexcharts.js"><img src="https://api.travis-ci.com/apexcharts/vue-apexcharts.js.svg?branch=master" alt="build" /></a>
  <a href="https://www.npmjs.com/package/vue-apexcharts"><img src="https://img.shields.io/npm/v/vue-apexcharts.svg" alt="ver"></a>
</p>

<p align="center">
  <a href="https://twitter.com/intent/tweet?text=Vue-ApexCharts%20A%20Vue.js%20Chart%20library%20built%20on%20ApexCharts.js&url=https://www.apexcharts.com&hashtags=javascript,charts,vue.js,vue,apexcharts"><img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social"> </a>
</p>

<p align="center">Vue.js wrapper for <a href="https://github.com/apexcharts/apexcharts.js">ApexCharts</a> to build interactive visualizations in vue.</p>

<p align="center"><a href="https://apexcharts.com/javascript-chart-demos/"><img src="https://apexcharts.com/media/apexcharts-banner.png"></a></p>


## Download and Installation

##### Installing via npm
[![NPM](https://nodei.co/npm/vue-apexcharts.png?mini=true)](https://npmjs.org/package/vue-apexcharts)

## Usage
```js
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts)
```

To create a basic bar chart with minimal configuration, write as follows:
```html
<template>
   <div>
     <apexcharts width="500" type="bar" :options="chartOptions" :series="series"></apexcharts>
   </div>
</template>
```

```js
import VueApexCharts from 'vue-apexcharts'

export default {
    components: {
      apexcharts: VueApexCharts,
    },
    data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }]
      }
    },
};
```
This will render the following chart
<p align="center"><a href="https://apexcharts.com/javascript-chart-demos/column-charts/"><img src="https://apexcharts.com/media/first-bar-chart.svg"></a></p>

### How do I update the chart?
Simple! Just change the `series` or any `option` and it will automatically re-render the chart. Have a look at the below example to see this in action
<p align="center"><a href="#"><img src="https://apexcharts.com/media/vue-chart-updation.gif"></a></p>

```html
<template>
   <div class="app">
     <apexcharts width="550" type="bar" :options="chartOptions" :series="series"></apexcharts>
     <div>
       <button @click="updateChart">Update!</button>
    </div>
   </div>
   
</template>
```

```js
export default {
    data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          },
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 81]
        }]
      }
    },
    methods: {
      updateChart() {
        const max = 90;
        const min = 20;
        const newData = this.series[0].data.map(() => {
          return Math.floor(Math.random() * (max - min + 1)) + min
        })

        const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']

        // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
        this.chartOptions = {
          colors: [colors[Math.floor(Math.random()*colors.length)]]
        };
        // In the same way, update the series option
        this.series = [{
          data: newData
        }]
      }
    }
};
```


## Props
- __series__ - `Array` (required)
The series is an array which accepts object in the following format
series: [{
  name: 'visitors'
  data: [23, 44, 56, 75, 56]
}]
The `data` property inside series accepts a variation of formats. To know more about the format of dataSeries, checkout [Series](https://apexcharts.com/docs/series/) docs on the website.

- __type__ - `String` (required)
chart type, possible values :
    - `line`
    - `area`
    - `bar`
    - `pie`
    - `donut`
    - `scatter`
    - `bubble`
    - `heatmap`
    - `radialBar`

- __width__ -  `Number` || `String`

  Possible values for width can be `100%` or `400px` or just 400

- __height__ -  `Number` || `String`

  Possible values for width can be `100%` or `300px` or just 300

- __options__ - `Object`

  Charts's configuration object, see options on [API (Reference)](https://apexcharts.com/docs/options/chart/type/)


## How to call methods of ApexCharts programatically?
Sometimes, you may want to call other methods of the core ApexCharts library, and you can do so on `this.$apexcharts` global variable directly

Example
```js
this.$apexcharts.exec('vuechart-example', 'updateSeries', [{
  data: [40, 55, 65, 11, 23, 44, 54, 33]
}])
```
In the above method, `vuechart-example` is the ID of chart, `updateSeries` is the name of the method you want to call and the third parameter is the new Series you want to update.

More info on the `.exec()` method can be found <a href="https://apexcharts.com/docs/methods/#exec">here</a>

All other methods of ApexCharts can be called the same way.

## What's included

The repository includes the following files and directories.

```
vue-apexcharts/
├── dist/
│   └── vue-apexcharts.js
└── src/
    ├── ApexCharts.component.js
    ├── Utils.js
    └── index.js
```

## Running the examples
Basic Examples are included to show how to get started using ApexCharts with Vue easily.

To run the examples,
```bash
cd example
npm install
npm run serve
```

## Development
#### Install dependencies

```bash
npm install
```

#### Bundling
```bash
npm run build
```

## License
Vue-ApexCharts is released under MIT license. You are free to use, modify and distribute this software, as long as the copyright header is left intact.
