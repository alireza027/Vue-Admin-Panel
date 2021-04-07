<template>
    <div>

        <!-- setting sidebar -->

        <!-- class="grey darken-4" -->
        <v-navigation-drawer  :right=" directionAndMode.direction == 'ltr' ? true : false " :color=" directionAndMode.mode == 'dark' ? 'grey darken-4' : 'white' " left fixed hide-overlay width="300" :value="getSettingToggleState" :permanent="getSettingToggleState" class="white elevation-2">
            
            <!-- setting header -->
            <Setting-Header />


            <!-- Direction And Night  -->
            <Dir-And-Night />


            <!-- header and drawer style -->
            <Header-And-Drawer-Style />


            <!-- drawer style -->
            <Content-Style />


            
        </v-navigation-drawer>


  </div>
</template>

<script>
// add components
import SettingHeader from './Header/index';
import DirAndNight from './DirAndNight/index';
import HeaderAndDrawerStyle from './HeaderAndDrawerStyle/index';
import ContentStyle from './ContentStyle/index'

export default {
    name:"SettingContainer",
    components:{
        "Setting-Header":SettingHeader,
        "Dir-And-Night":DirAndNight,
        "Header-And-Drawer-Style":HeaderAndDrawerStyle,
        "Content-Style":ContentStyle,
    },
    created(){
        console.log(this.$store.state.setting.contentStyle);
    },
    computed:{
        getSettingToggleState(){
            return this.$store.state.header.settingDrawer
        },
        directionAndMode(){
            return this.$store.state.setting.directionAndMode;
        }
    },
    methods:{
        toggleSettingMutation(){
            return this.$store.commit("settingDrawerToggle");
        }
    }
}
</script>