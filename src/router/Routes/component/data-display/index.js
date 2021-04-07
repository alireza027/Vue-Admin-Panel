export default [
    {
        path: '/components/data-display',
        component: () => import('../../../../views/Component/DataDisplay/Carousels/Carousel.vue')
    },
    {
        path: '/components/data-display/carousels',
        component: () => import('../../../../views/Component/DataDisplay/Carousels/Carousel.vue')
    },
    {
        path: '/components/data-display/accordion',
        component: () => import('../../../../views/Component/DataDisplay/Accordion/Accordion.vue')
    },
    {
        path: '/components/data-display/avatars',
        component: () => import('../../../../views/Component/DataDisplay/Avatars/Avatars.vue')
    },
    {
        path: '/components/data-display/parallax',
        component: () => import('../../../../views/Component/DataDisplay/Parallax/Parallax.vue')
    },
    {
        path: '/components/data-display/tooltips',
        component: () => import('../../../../views/Component/DataDisplay/Tooltips/Tooltips.vue')
    },
    {
        path: '/components/data-display/tabs',
        component: () => import('../../../../views/Component/DataDisplay/Tabs/Tabs.vue')
    },
    {
        path: '/components/data-display/timeline',
        component: () => import('../../../../views/Component/DataDisplay/Timeline/Timeline.vue')
    },
    {
        path: '/components/data-display/chips',
        component: () => import('../../../../views/Component/DataDisplay/Chips/Chips.vue')
    },
    {
        path: '/components/data-display/chip-groups',
        component: () => import('../../../../views/Component/DataDisplay/ChipGroups/ChipGroups.vue')
    },
    {
        path: '/components/data-display/steppers',
        component: () => import('../../../../views/Component/DataDisplay/Steppers/Stepper.vue')
    },
    {
        path: '/components/data-display/skeleton-loader',
        component: () => import('../../../../views/Component/DataDisplay/SkeletonLoader/SkeletonLoader.vue')
    },
    {
        path: '/components/data-display/badges',
        component: () => import('../../../../views/Component/DataDisplay/Badges/Badges.vue')
    },
    {
        path: '/components/data-display/tree-view',
        component: () => import('../../../../views/Component/DataDisplay/TreeView/TreeView.vue')
    },
]