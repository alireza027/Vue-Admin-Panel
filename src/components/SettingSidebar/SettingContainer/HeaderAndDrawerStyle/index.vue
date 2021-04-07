<template>

  <div>

    <v-container fluid>

        <!-- header -->
        <v-toolbar-title :style="directionAndMode.direction == 'ltr' && 'text-align:right' " :class="directionAndMode.mode == 'dark' ? 'white--text' : 'text--darken-4 text--darken-4' " class="pb-0 mb-3 pr-1 mt-1">استایل هدر و سایدبار</v-toolbar-title>

        <!-- switch section -->
         <Switch-Header-Style />


        <!-- header height -->
         <Height-Header-Style />


         <!-- header background -->
         <Background-Header-Style />


    </v-container>

     <v-divider :class=" directionAndMode.mode == 'dark' && 'grey' "></v-divider>

  </div>

</template>

<script>

// add components
import SwitchHeader from './Switch/index';
import Height from './Height/index';
import Background from './Background/index'
export default {
    name:"SettingHeaderStyle",
    components:{
        "Switch-Header-Style":SwitchHeader,
        "Height-Header-Style":Height,
        "Background-Header-Style":Background
    },
    computed:{
      directionAndMode(){
          return this.$store.state.setting.directionAndMode;
        }
    }
}
</script>

<style>

</style>