import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import fa from 'vuetify/es5/locale/fa'
import en from 'vuetify/es5/locale/en'

Vue.use(Vuetify);

export default new Vuetify({
    rtl: JSON.parse(window.localStorage.getItem("direction-and-mode")).direction == 'rtl' ? true : false,
    lang: {
        locales: { fa, en },
        current: 'fa'
    }
});
