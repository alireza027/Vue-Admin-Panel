export default [
    {
        path: '/additional-component/picture-editor',
        component: () => import('../../../../views/AdditionalComponent/PictureEditor/ToastUi/ToastUi')
    },
    {
        path: '/additional-component/picture-editor/toast-ui',
        component: () => import('../../../../views/AdditionalComponent/PictureEditor/ToastUi/ToastUi')
    }
]