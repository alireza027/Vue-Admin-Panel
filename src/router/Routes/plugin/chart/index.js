export default [
    {
        path: '/plugin/chart',
        component: () => import('../../../../views/Plugin/Chart/AmChart/AmChart.vue')
    },
    {
        path: '/plugin/chart/amchart',
        component: () => import('../../../../views/Plugin/Chart/AmChart/AmChart.vue')
    },
    {
        path: '/plugin/chart/toast-ui',
        component: () => import('../../../../views/Plugin/Chart/ToastUi/ToastUi.vue')
    },
    {
        path: '/plugin/chart/rechart',
        component: () => import('../../../../views/Plugin/Chart/Rechart/ReChart.vue')
    }
]