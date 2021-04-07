import Authenticate from './authenticate/index';
export default [
    {
        path: "/custom-view",
        component: () => import('../../../views/CustomView/Authenticate/Register/Register.vue')
    },


    // authentication
    ...Authenticate
]