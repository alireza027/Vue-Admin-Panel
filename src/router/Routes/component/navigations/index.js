export default [
    {
        path: '/components/navigations',
        component: () => import('../../../../views/Component/Navigation/Breadcrumbs/Breadcrumbs.vue')
    },
    {
        path: '/components/navigations/breadcrumbs',
        component: () => import('../../../../views/Component/Navigation/Breadcrumbs/Breadcrumbs.vue')
    },
    {
        path: '/components/navigations/pagination',
        component: () => import('../../../../views/Component/Navigation/Pagination/Pagination.vue')
    },
    {
        path: '/components/navigations/menus',
        component: () => import('../../../../views/Component/Navigation/Menus/Menus.vue')
    },
    {
        path: '/components/navigation/bottom-navigations',
        component: () => import('../../../../views/Component/Navigation/BottomNavigations/BottomNavigations.vue')
    },
]