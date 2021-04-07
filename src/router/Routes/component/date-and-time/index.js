export default [
    {
        path: '/components/date-and-time',
        component: () => import('../../../../views/Component/DateAndTime/Date/Date.vue')
    },
    {
        path: '/components/date-and-time/date',
        component: () => import('../../../../views/Component/DateAndTime/Date/Date.vue')
    },
    {
        path: '/components/date-and-time/calendar',
        component: () => import('../../../../views/Component/DateAndTime/Calender/Calender.vue')
    },
    {
        path: '/components/date-and-time/time',
        component: () => import('../../../../views/Component/DateAndTime/Time/Time.vue')
    },
]