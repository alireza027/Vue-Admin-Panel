export default [
    {
        path: '/components/feedback',
        component: () => import('../../../../views/Component/Feedback/Alert/Alert.vue')
    },
    {
        path: '/components/feedback/alert',
        component: () => import('../../../../views/Component/Feedback/Alert/Alert.vue')
    },
    {
        path: '/components/feedback/progress',
        component: () => import('../../../../views/Component/Feedback/Progress/Progress.vue')
    },
    {
        path: '/components/feedback/bottom-sheet',
        component: () => import('../../../../views/Component/Feedback/BottomSheet/BottomSheet.vue')
    },
    {
        path: '/components/feedback/modal',
        component: () => import('../../../../views/Component/Feedback/Modal/Modal.vue')
    },
    {
        path: '/components/feedback/snackbar',
        component: () => import('../../../../views/Component/Feedback/Snackbar/Snackbar.vue')
    },
]