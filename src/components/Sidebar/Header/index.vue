<template>
    <v-container fluid :style="posMarginBottom">
      <v-list-item class="pos-fix elevation-1" :class=" `${headerAndSidebar.primaryBackground} ${headerAndSidebar.primaryColor} ` " :style="posFixHeader">

        <v-row align="center" justify="space-around">
          <v-list-item-icon class="pos-fix-img">

            <v-img src="/logo.png" width="40" height="40" style="margin-right:0px;margin-top:4px"></v-img>
          </v-list-item-icon>

          <v-list-item-content>

            <v-list-item-title class="white--text pos-fix-title">Hozh Admin Panel</v-list-item-title>

          </v-list-item-content>

        </v-row>

      </v-list-item>
    </v-container>
</template>


<script>
export default {
    name:"NavigationHeader",
    computed:{
      headerAndSidebar(){
        return this.$store.state.setting.headerAndSidebar;
      },
      posFixHeader(){
        return `height:${Number(this.headerAndSidebar.heightHeaderSidebar - 1)}px`
      },
      posMarginBottom(){
        return `margin-bottom: ${ Number( this.headerAndSidebar.heightHeaderSidebar - 32) }px `
      }
    }
}

</script>

<style lang="scss">

</style>