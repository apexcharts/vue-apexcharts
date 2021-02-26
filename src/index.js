import ApexCharts from "apexcharts/dist/apexcharts.min";
import ApexChartsComponent from './ApexCharts.component';

const VueApexCharts = ApexChartsComponent;
window.ApexCharts = ApexCharts;

VueApexCharts.install = function (Vue) {
    //adding a global method or property
    Vue.ApexCharts = ApexCharts;
    window.ApexCharts = ApexCharts;
  
    // add the instance method
    Object.defineProperty(Vue.prototype, '$apexcharts', {
        get: function get() {
            return ApexCharts
        }
    });
  
  const fill = window.SVG.Gradient.prototype.fill;
  window.Gradient.prototype.fill = function (...args) {
    const url = fill.apply(this, args);
    const prefix = `url(${document.location.href}`;

    if (!url.startsWith(prefix)) {
      return url.split('url(').join(prefix);
    }

    return url;
  };
};

export default VueApexCharts
