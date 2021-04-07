import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'

Vue.config.productionTip = false

// add default app data to localstorage 
if (window.localStorage.getItem("direction-and-mode") === null) {
  window.localStorage.setItem("direction-and-mode", JSON.stringify({ direction: "rtl", mode: "light" }));
  window.location.href = "/";
}

if (window.localStorage.getItem("header-and-sidebar") === null) {
  window.localStorage.setItem("header-and-sidebar", JSON.stringify({ fixHeader: true, elevationHeader: true, sharedHeader: false, floatingHeader: false, scrollElevationHeader: false, scrollHideHeader: false, expandHoverDrawer: false, heightHeaderSidebar: 66, primaryBackground: "blue-grey darken-4", primaryColor: "white--text", secondaryBackground: "amber", secondaryColor: "white--text", primaryDarkBackground: "blue-grey darken-4", primaryDarkColor: "white--text", secondaryDarkBackground: "yellow", secondaryDarkColor: "white--text", otherColor: "grey darken-2", iconColor: "amber" }))
  window.location.href = "/";
}

if (window.localStorage.getItem("content-style") === null) {
  window.localStorage.setItem("content-style", JSON.stringify({ roundedContent: true, elevationContent: true, transition: "fade", containerFluid: true }));
  window.location.href = "/";
}

window.app = new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
