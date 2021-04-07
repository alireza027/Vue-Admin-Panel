<template>

  <div>
      
      <v-container fluid>

          <!-- header -->
          <v-toolbar-title :class="directionAndMode.mode == 'dark' ? 'white--text' : 'text--darken-4 text--darken-4' " class="pb-0 mb-3 mt-1 pr-1">استایل بخش محتوا</v-toolbar-title>

          <!-- switch section -->
          <Switch-Section />

          <!-- Transition Section -->
          <Transition-ection />



      </v-container>

  </div>

</template>

<script>

// add components
import SwitchSection from './Switch/index';
import TransitionSection from './Transition/index';

export default {
    name:"ContentStyle",
    components:{
        "Switch-Section":SwitchSection,
        "Transition-ection":TransitionSection
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