export default [
    {
        path: "/custom-view/authenticate",
        component: () => import('../../../../views/CustomView/Authenticate/Register/Register.vue')
    },
    {
        path: "/custom-view/authenticate/register",
        component: () => import('../../../../views/CustomView/Authenticate/Register/Register.vue')
    },
    {
        path: "/custom-view/authenticate/reset-password",
        component: () => import('../../../../views/CustomView/Authenticate/ResetPassword/ResetPassword.vue')
    },
    {
        path: "/custom-view/authenticate/forget-password",
        component: () => import('../../../../views/CustomView/Authenticate/ForgetPassword/ForgetPassword.vue')
    },
    {
        path: "/custom-view/authenticate/login",
        component: () => import('../../../../views/CustomView/Authenticate/Login/Login.vue')
    },
]