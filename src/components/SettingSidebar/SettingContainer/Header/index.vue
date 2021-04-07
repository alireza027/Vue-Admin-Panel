<template>

  <v-container fluid :style="posMarginBottom  " style="direction:rtl">

  <v-toolbar flat :height="headerAndSidebar.heightHeaderSidebar" class=" pos-fix elevation-1" :class=" `${headerAndSidebar.primaryBackground} ${headerAndSidebar.primaryColor} ` " style="width:100%" >

    <v-row justify="space-between" align="center" class="row-width-100">

    <v-col><v-toolbar-title>تنظیمات پنل</v-toolbar-title></v-col>

    <v-spacer></v-spacer>

    <v-col>
      <v-btn @click.stop="toggleSettingMutation" icon rounded><v-icon color="white">mdi-close</v-icon></v-btn>
    </v-col>

    </v-row>

  </v-toolbar>

  </v-container>

</template>

<script>
export default {
  name:"SettingContainerHeader",
  computed:{
    headerAndSidebar(){
        return this.$store.state.setting.headerAndSidebar;
    },
    posMarginBottom(){
        return `margin-bottom: ${ Number( this.headerAndSidebar.heightHeaderSidebar - 25) }px `
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

<style>

</style>