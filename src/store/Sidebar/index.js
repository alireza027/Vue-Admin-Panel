// add state
import Dashboard from './states/dashboard/index';
import Component from './states/component/index';
import AdditionalComponent from './states/additional-component/index';
import Plugin from './states/plugin/index';
import CustomView from './states/custom-view/index';
import AdditionalPage from './states/additional-page/index';
import Setting from './states/setting/index';
import Document from './states/document/index';

const Sidebar = {
    state: {
        sidebar: [
            ...Dashboard,
            ...Component,
            ...AdditionalComponent,
            ...Plugin,
            ...CustomView,
            ...AdditionalPage,
            ...Setting,
            ...Document
        ],
    }
}
export default Sidebar;