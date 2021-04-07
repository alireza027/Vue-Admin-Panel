// add dependencies
import Vue from 'vue'
import Vuex from 'vuex'


// add vuex module
import Header from './Header/index';
import Sidebar from './Sidebar/index';
import SettingSidebar from './Setting/index';


// use middleware like node.js
Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    header: Header,
    sidebar: Sidebar,
    setting: SettingSidebar,
  }
})
