import ApexCharts from 'apexcharts'
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
};

export default VueApexCharts