export default [
    {
        path: '/additional-component/other',
        component: () => import('../../../../views/AdditionalComponent/Other/IFrame/IFrame.vue')
    },
    {
        path: '/additional-component/other/iframe',
        component: () => import('../../../../views/AdditionalComponent/Other/IFrame/IFrame.vue')
    },
    {
        path: '/additional-component/other/notification',
        component: () => import('../../../../views/AdditionalComponent/Other/Notification/Notification.vue')
    },
    {
        path: '/additional-component/other/timer',
        component: () => import('../../../../views/AdditionalComponent/Other/Timer/Timer.vue')
    },
    {
        path: '/additional-component/other/audio-player',
        component: () => import('../../../../views/AdditionalComponent/Other/AudioPalyer/AudioPlayer.vue')
    },
    {
        path: '/additional-component/other/video-player',
        component: () => import('../../../../views/AdditionalComponent/Other/VidoePlayer/VideoPlayer.vue')
    },
    {
        path: '/additional-component/other/count-down',
        component: () => import('../../../../views/AdditionalComponent/Other/CountDown/CountDown.vue')
    },
]