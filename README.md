<p align="center"><img src="https://apexcharts.com/media/vue-apexcharts.png"></p>

<p align="center">
  <a href="https://github.com/apexcharts/vue-apexcharts/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-MIT-brightgreen.svg" alt="License"></a>
  <a href="https://travis-ci.com/apexcharts/vue-apexcharts"><img src="https://api.travis-ci.com/apexcharts/vue-apexcharts.svg?branch=master" alt="build" /></a>
  <a href="https://www.npmjs.com/package/vue-apexcharts"><img src="https://img.shields.io/npm/v/vue-apexcharts.svg" alt="ver"></a>
</p>

<p align="center">
  <a href="https://twitter.com/intent/tweet?text=Vue-ApexCharts%20A%20Vue.js%20Chart%20library%20built%20on%20ApexCharts.js&url=https://www.apexcharts.com&hashtags=javascript,charts,vue.js,vue,apexcharts"><img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social"> </a>
</p>

<p align="center">Vue.js wrapper for <a href="https://github.com/apexcharts/apexcharts.js">ApexCharts</a> to build interactive visualizations in vue.</p>

<p align="center"><a href="https://apexcharts.com/javascript-chart-demos/"><img src="https://apexcharts.com/media/apexcharts-banner.png"></a></p>


## Download and Installation

##### Installing via npm

```bash
npm install --save apexcharts
npm install --save vue-apexcharts
```

## Usage
```js
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
```

To create a basic bar chart with minimal configuration, write as follows:
```vue
<template>
   <div>
     <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
   </div>
</template>
```

```js

export default {
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
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }]
      }
    },
};
```

This will render the following chart
<p><a href="https://apexcharts.com/javascript-chart-demos/column-charts/"><img src="https://apexcharts.com/media/first-bar-chart.svg"></a></p>

### How do I update the chart?

Simple! Just change the `series` or any `option` and it will automatically re-render the chart. <br/> Click on the below example to see this in action
<p><a href="https://codesandbox.io/s/voyy36o7y"><img src="https://apexcharts.com/media/vue-chart-updation.gif"></a></p>

```vue
<template>
   <div class="app">
     <apexchart width="550" type="bar" :options="chartOptions" :series="series"></apexchart>
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


**Important:** While updating the options, make sure to update the outermost property even when you need to update the nested property.

✅ Do this
```javascript
this.chartOptions = {...this.chartOptions, ...{
    xaxis: {
        labels: {
           style: {
             colors: ['red']
           }
        }
    }
}}
```

❌ Not this
```javascript
this.chartOptions.xaxis = {
    labels: {
        style: {
          colors: ['red']
        }
    }
}}
```

## Props

| Prop        | Type           | Description  |
| ------------- |-------------| -----|
| **series***| Array | The series is an array which accepts object in the following format. To know more about the format of dataSeries, checkout [Series](https://apexcharts.com/docs/series/) docs on the website. |
| **type*** | String  | `line`, `area`, `bar`, `pie`, `donut`, `scatter`, `bubble`, `heatmap`, `radialBar`, `candlestick`  |
| **width** | Number/String  | Possible values for width can be `100%` or `400px` or 400 |
| **height** | Number/String | Possible values for width can be `100%` or `300px` or 300 |
| **options** | Object | The configuration object, see options on [API (Reference)](https://apexcharts.com/docs/options/chart/type/) |


## Methods

You don't actually need to call updateSeries() or updateOptions() manually. Changing the props will automatically update the chart. You only need to call these methods to update the chart forcefully.

| Method        | Description    |
| ------------- | -----|
| <a href="https://apexcharts.com/docs/methods/#updateSeries">updateSeries</a> | Allows you to update the series array overriding the existing one |
| <a href="https://apexcharts.com/docs/methods/#updateOptions">updateOptions</a> | Allows you to update the configuration object |
| <a href="https://apexcharts.com/docs/methods/#toggleSeries">toggleSeries</a> | Allows you to toggle the visibility of series programatically. Useful when you have custom legend. |
| <a href="https://apexcharts.com/docs/methods/#appendData">appendData</a> | Allows you to append new data to the series array. |
| <a href="https://apexcharts.com/docs/methods/#addtext">addText</a> | The addText() method can be used to draw text after chart is rendered. |
| <a href="https://apexcharts.com/docs/methods/#addxaxisannotation">addXaxisAnnotation</a> | Draw x-axis annotations after chart is rendered. |
| <a href="https://apexcharts.com/docs/methods/#addyaxisannotation">addYaxisAnnotation</a> | Draw y-axis annotations after chart is rendered. |
| <a href="https://apexcharts.com/docs/methods/#addpointannotation">addPointAnnotation</a> | Draw point (xy) annotations after chart is rendered. |

How to call the methods mentioned above?

```html
<template>
  <div class="example">
    <apexchart ref="demoChart" width="500" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
  functionName: function() {
    this.$refs.demoChart.updateOptions({ colors: newColors })
  },
</script>
```

## How to call methods of ApexCharts without referencing the chart element?

Sometimes, you may want to call methods of the core ApexCharts library from some other place, and you can do so on `this.$apexcharts` global variable directly. You need to target the chart by <code>chart.id</code> while calling this method

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


## Supporting ApexCharts
ApexCharts is an open source project. <br /> You can help by becoming a sponsor on <a href="https://patreon.com/junedchhipa">Patreon</a> or doing a one time donation on <a href="https://paypal.me/junedchhipa">PayPal</a> <br />

<a href="https://patreon.com/junedchhipa"><img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patron" /> </a>

## License

Vue-ApexCharts is released under MIT license. You are free to use, modify and distribute this software, as long as the copyright header is left intact.
