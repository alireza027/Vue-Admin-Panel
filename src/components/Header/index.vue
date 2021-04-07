<template>
    <!-- v-app-bar for container content like header main content and footer -->
    <v-app-bar app :height="headerAndSidebar.heightHeaderSidebar"  :class=" `${headerAndSidebar.primaryBackground} ${headerAndSidebar.primaryColor} ` " dark :shaped="headerAndSidebar.sharedHeader" :floating="headerAndSidebar.floatingHeader" :elevation=" headerAndSidebar.elevationHeader == true ? '4' : '0'  "  :elevate-on-scroll="headerAndSidebar.scrollElevationHeader" :hide-on-scroll="headerAndSidebar.scrollHideHeader" >

      <!-- my header -->
      <v-app-bar-nav-icon @click.stop="toggleMenu"></v-app-bar-nav-icon>


      <!-- Space -->
      <v-spacer></v-spacer>


    <!-- setting section -->
      <Setting />



      <!-- asnad -->
      <DocumentTooltip />



      <!-- User -->
      <UserTooltip />



    </v-app-bar>
</template>

<script>

// add components
import DocumentTooltip from './DocumentTooltip/index.vue';
import UserTooltip from './UserTooltip/index.vue';
import Setting from './Setting/index';


export default {
    name:"HeaderContainer",

    components:{
        Setting,
        DocumentTooltip,
        UserTooltip,
    },

    methods : {
        toggleMenu(){
            return this.$store.commit('toggleMenu');
        }
    },
    computed:{
        data(){
            return this.$store.state.setting.directionAndMode;
        },
        headerAndSidebar(){
            return this.$store.state.setting.headerAndSidebar;
        },
    }
    
    
}
</script>

<style lang="scss">

</style>