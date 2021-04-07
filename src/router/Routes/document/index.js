import Description from './Description/index'

export default [
    {
        path:'/document',
        component: ()=>import('../../../views/Document/Description/Description.vue')
    },


    ...Description
]