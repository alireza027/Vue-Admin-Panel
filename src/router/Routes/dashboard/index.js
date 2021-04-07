import Dashboard from './dashbaord/index';
export default [
    {
        path: '/dashboard',
        component: () => import('../../../views/Dashboard/Dashboard1/Dashboard1.vue'),
    },
    ...Dashboard

];