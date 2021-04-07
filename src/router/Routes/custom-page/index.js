import CustomPage from './pages/index';
export default [
    {
        path: "/additional-page",
        component: () => import('../../../views/AdditionalPage/200/200.vue')
    },


    ...CustomPage
]