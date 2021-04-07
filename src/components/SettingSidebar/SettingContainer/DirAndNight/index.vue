<template>

  <div>

      <v-container fluid >

          <!-- header -->
        <v-toolbar-title :style="directionAndMode.direction == 'ltr' && 'text-align:right' " :class="directionAndMode.mode == 'dark' ? 'white--text' : 'text--darken-4 text--darken-4' " class="pb-0 mb-0 pr-1">نوع تم و جهت</v-toolbar-title>


                <!-- add night mode -->
                <Night-Mode />

                <!-- add direction -->
                <Direction />


    </v-container>

    <v-divider :class=" directionAndMode.mode == 'dark' && 'grey' "></v-divider>

  </div>

</template>

<script>

// add components
import NightMode from './NightMode/index';
import Direction from './Direction/index';

export default {
    name:"DirAndNight",
    components:{
        "Night-Mode":NightMode,
        Direction:Direction
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