export default [
    {
        path: '/components/style',
        component: () => import('../../../../views/Component/Style/Typography/Typography.vue')
    },
    {
        path: '/components/style/typography',
        component: () => import('../../../../views/Component/Style/Typography/Typography.vue')
    },
    {
        path: '/components/style/transition',
        component: () => import('../../../../views/Component/Style/Transition/Transition.vue')
    },
    {
        path: '/components/style/flex-and-display',
        component: () => import('../../../../views/Component/Style/FlexAndDisplay/FlexAndDisplay.vue')
    },
]