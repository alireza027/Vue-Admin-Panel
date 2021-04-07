export default [
    {
        path: '/components/other',
        component: () => import('../../../../views/Component/Other/Banner/Banner.vue')
    },
    {
        path: '/components/other/banner',
        component: () => import('../../../../views/Component/Other/Banner/Banner.vue')
    },
    {
        path: '/components/other/divider',
        component: () => import('../../../../views/Component/Other/Divider/Divider.vue')
    },
    {
        path: '/components/other/footer',
        component: () => import('../../../../views/Component/Other/Footer/Footer.vue')
    },
    {
        path: '/components/other/lazy',
        component: () => import('../../../../views/Component/Other/LazyLoad/LazyLoad.vue')
    },
    {
        path: '/components/other/spark-line',
        component: () => import('../../../../views/Component/Other/Chart/Chart.vue')
    },
]