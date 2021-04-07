import General from './general/index';
import Navigation from './navigations/index';
import Inputs from './inputs/index';
import DataDisplay from './data-display/index';
import Feedback from './feedback/index';
import Table from './table/index';
import DateAndTime from './date-and-time/index';
import Style from './style/index';
import Directive from './directive/index';
import Other from './other/index';
export default [

    // parent
    {
        path: '/components',
        component: () => import('../../../views/Component/General/Scroll/Scroll.vue')
    },


    // general section
    ...General,


    // navigation section
    ...Navigation,


    // inputs section
    ...Inputs,


    // data display section
    ...DataDisplay,


    // feedback section
    ...Feedback,


    // table section
    ...Table,


    // date and time section
    ...DateAndTime,


    // style section
    ...Style,


    // directive section
    ...Directive,


    // other section
    ...Other

]