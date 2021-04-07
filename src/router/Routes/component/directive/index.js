export default [
    {
        path: '/components/directive',
        component: () => import('../../../../views/Component/Directive/Scroll/Scroll.vue')
    },
    {
        path: '/components/directive/scroll',
        component: () => import('../../../../views/Component/Directive/Scroll/Scroll.vue')
    },
    {
        path: '/components/directive/ripple',
        component: () => import('../../../../views/Component/Directive/Ripple/Ripple.vue')
    },
    {
        path: '/components/directive/intersection',
        component: () => import('../../../../views/Component/Directive/Intersection/Intersection.vue')
    },
    {
        path: '/components/directive/mutation',
        component: () => import('../../../../views/Component/Directive/Mutation/Mutation.vue')
    },
    {
        path: '/components/directive/resize',
        component: () => import('../../../../views/Component/Directive/Resize/Resize.vue')
    },
    {
        path: '/components/directive/outside-click',
        component: () => import('../../../../views/Component/Directive/OutsideClick/OutsideClick.vue')
    },
    {
        path: '/components/directive/touch',
        component: () => import('../../../../views/Component/Directive/Touch/Touch.vue')
    },
]