<template>
  <!-- v-app section for container for all -->
  <v-app>
    

    <!-- Header -->
    <Header />



    <!-- my navigation section -->
    <Sidebar />


    <!-- setting sidebar -->
    <Setting-Sadebar />


    <!-- main content -->
    <Content />


    <!-- this is my footer -->
    <!-- <Footer /> -->


  </v-app>


</template>

<!-- script section -->
<script>

// add components and scss
import Header from './components/Header/index';
import Sidebar from './components/Sidebar/index';
import SettingSidebar from './components/SettingSidebar/SettingContainer/index'
import Content from './components/Content/index';
// import Footer from './components/Footer/index';
import './assets/styles/conatiner/index.scss';

export default {
  name: "App",


  components: {
    Header,
    Sidebar,
    "Setting-Sadebar":SettingSidebar,
    Content,
    // Footer
  },

  data: () => ({
    // sidebarMenu: false,
    // toggleMini: false,
  }),

  computed: {

    // sidebar content

    buttonText() {
      return !this.$vuetify.theme.dark ? "Go Dark" : "Go Light";
    },
  },

  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>