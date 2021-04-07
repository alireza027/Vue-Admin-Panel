<template>
  <v-navigation-drawer right :class="headerAndSidebar.primaryBackground" app floating v-model="getSidebarContent" :permanent="getSidebarContent" :mini-variant.sync="mini" :expand-on-hover="headerAndSidebar.expandHoverDrawer">


      <!-- logo and title -->
      <Header />
      <v-divider></v-divider>
      

      <!-- menus -->
      <Menu />
    <v-divider></v-divider>


      
    <v-list-item class="px-2 d-none d-sm-flex" @click="toggleMini = !toggleMini" v-if="headerAndSidebar.expandHoverDrawer != true">

        <v-list-item-avatar>

          <v-icon color="white" v-if="toggleMini">mdi-chevron-left</v-icon>
          <v-icon color="white" v-else>mdi-chevron-right</v-icon>

        </v-list-item-avatar>

        <v-list-item-content class="text-truncate white--text">منو کوچک</v-list-item-content>

    </v-list-item>


    </v-navigation-drawer>
</template>

<script>

// add components
import Header from './Header/index'
import Menu from './Menu/index'

export default {
    name:"DrawerContainer",
    components:{
        Header,
        Menu,
    },
    data:()=>({
      toggleMini: false
    }),
    computed:{
        getSidebarContent(){
            return this.$store.state.header.sidebarMenu;
        },
        mini: {
            get() {
                return this.$vuetify.breakpoint.xs || this.toggleMini;
            },
            set() {
                
            },
        },
        headerAndSidebar(){
            return this.$store.state.setting.headerAndSidebar;
        },
    },
}
</script>

<style>

</style>