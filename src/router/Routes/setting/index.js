import Setting from './configurate/index';
export default [
    {
        path: "/setting",
        component: () => import('../../../views/Setting/Configurate/Configurate.vue')
    },


    ...Setting
]