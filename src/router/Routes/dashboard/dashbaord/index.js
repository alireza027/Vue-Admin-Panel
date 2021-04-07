export default [
    {
        path: "/dashboard/dashboard-1",
        component: () => import('../../../../views/Dashboard/Dashboard1/Dashboard1.vue')
    },
    {
        path: "/dashboard/dashboard-2",
        component: () => import('../../../../views/Dashboard/Dashboard2/Dashboard2.vue')
    },
    {
        path: "/dashboard/dashboard-3",
        component: () => import('../../../../views/Dashboard/Dashboard3/Dashboard3.vue')
    }
]