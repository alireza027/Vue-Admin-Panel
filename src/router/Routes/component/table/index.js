export default [
    {
        path: '/components/table',
        component: () => import('../../../../views/Component/Table/DataTable/DataTable.vue')
    },
    {
        path: '/components/table/data-table',
        component: () => import('../../../../views/Component/Table/DataTable/DataTable.vue')
    },
    {
        path: '/components/table/simple-table',
        component: () => import('../../../../views/Component/Table/SimpleTable/SimpleTable.vue')
    },
    {
        path: '/components/table/show-data',
        component: () => import('../../../../views/Component/Table/ShowData/ShowData.vue')
    },
]