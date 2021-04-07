import Chart from './chart/index';
import Maps from './map/index';
export default [
    {
        path: '/plugin',
        component: () => import('../../../views/Plugin/Chart/AmChart/AmChart.vue')
    },


    // chart
    ...Chart,


    // Map
    ...Maps
]