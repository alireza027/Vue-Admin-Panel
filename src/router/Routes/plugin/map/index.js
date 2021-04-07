export default [
    {
        path: '/plugin/map',
        component: () => import('../../../../views/Plugin/Map/AmChart/AmChart.vue')
    },
    {
        path: '/plugin/map/am-chart',
        component: () => import('../../../../views/Plugin/Map/AmChart/AmChart.vue')
    },
    {
        path: '/plugin/map/re-chart',
        component: () => import('../../../../views/Plugin/Map/Rechart/ReChart.vue')
    },
    {
        path: '/plugin/map/google-map',
        component: () => import('../../../../views/Plugin/Map/GoogleMap/GoogleMap.vue')
    }
]