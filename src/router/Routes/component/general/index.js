export default [
    {
        path: '/components/general',
        component: () => import('../../../../views/Component/General/Scroll/Scroll.vue')
    },
    {
        path: '/components/general/scroll',
        component: () => import('../../../../views/Component/General/Scroll/Scroll.vue')
    },
    {
        path: '/components/general/icons',
        component: () => import('../../../../views/Component/General/Icons/Icons.vue')
    },
    {
        path: '/components/general/buttons',
        component: () => import('../../../../views/Component/General/Buttons/Buttons.vue')
    },
    {
        path: '/components/general/floating-buttons',
        component: () => import('../../../../views/Component/General/FloatingButtons/FloatingButton.vue')
    },
    {
        path: '/components/general/button-groups',
        component: () => import('../../../../views/Component/General/ButtonGroups/ButtonGroups.vue')
    },
    {
        path: '/components/general/cards',
        component: () => import('../../../../views/Component/General/Cards/Cards.vue')
    },
    {
        path: '/components/general/lists',
        component: () => import('../../../../views/Component/General/Lists/Lists.vue')
    },
]