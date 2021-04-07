import Dashboard from './dashboard/index'
import Component from './component/index'
import AdditionalComponent from './additional-component/index'
import Plugin from './plugin/index'
import CustomView from './custom-view/index';
import CustomPage from './custom-page/index';
import Setting from './setting/index';
import Document from './document/index'


export default [

    // dashboard
    ...Dashboard,

    // Component
    ...Component,

    // Additional Component
    ...AdditionalComponent,

    // Plugin
    ...Plugin,

    // custom view
    ...CustomView,

    // custom page
    ...CustomPage,

    // setting
    ...Setting,

    // document
    ...Document,

    // 404 page
    {
        path: "*",
        name: "Not Found",
        component: () => import('../../views/AdditionalPage/404/404.vue')
    }
]