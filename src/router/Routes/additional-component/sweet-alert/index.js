export default [
    {
        path: '/additional-component/sweet-alert',
        component: () => import('../../../../views/AdditionalComponent/SweetAlert/SweetAlert/SweetAlert.vue')
    },
    {
        path: '/additional-component/sweet-alert/sweet-alert',
        component: () => import('../../../../views/AdditionalComponent/SweetAlert/SweetAlert/SweetAlert.vue')
    },
]