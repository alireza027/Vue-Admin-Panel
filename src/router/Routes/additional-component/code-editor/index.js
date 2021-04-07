export default [
    {
        path: '/additional-component/code-editor',
        component: () => import('../../../../views/AdditionalComponent/CodeEditor/ToastUi/ToastUi.vue')
    },
    {
        path: '/additional-component/code-editor/toast-ui',
        component: () => import('../../../../views/AdditionalComponent/CodeEditor/ToastUi/ToastUi.vue')
    },
    {
        path: '/additional-component/code-editor/ck-editor',
        component: () => import('../../../../views/AdditionalComponent/CodeEditor/CkEditor/CkEditor.vue')
    },
    {
        path: '/additional-component/code-editor/mavon-eidtor',
        component: () => import('../../../../views/AdditionalComponent/CodeEditor/MavonEditor/MavonEditor.vue')
    }
]