<template>
  <v-row justify="space-around" >
      <v-col sm="6" md="6">
        <v-btn block large @click="changeMode(`light`)" :class="directionAndMode.mode == 'light' ? `${headerAndSidebar.primaryBackground} ${headerAndSidebar.primaryColor}` : 'grey lighten-3' "> 
            <v-row justify="space-between" align="center">
                <v-col><v-icon left :color="directionAndMode.mode == 'light' ? headerAndSidebar.iconColor : headerAndSidebar.otherColor ">mdi-white-balance-sunny</v-icon></v-col>
                <v-col><div class="title">روشن</div></v-col>
            </v-row>
        </v-btn>
    </v-col>

    <v-col sm="6" md="6">
        <v-btn block large @click.stop="changeMode(`dark`)" :class="directionAndMode.mode == 'dark' ? `${headerAndSidebar.primaryBackground} ${headerAndSidebar.primaryColor}` : 'grey lighten-3' " > 
            <v-row justify="space-between" align="center">
                <v-col><v-icon left :color="directionAndMode.mode == 'dark' ? headerAndSidebar.iconColor : headerAndSidebar.otherColor ">mdi-weather-night</v-icon></v-col>
                <v-col><div class="title">تیره</div></v-col>
            </v-row>
        </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
    name:"NightMode",
    computed:{
        directionAndMode(){
            return this.$store.state.setting.directionAndMode
        },
        headerAndSidebar(){
            return this.$store.state.setting.headerAndSidebar;
        }

    },
    methods:{
        changeMode(mode){
            return this.$store.commit('changeMode',mode);
        },
    }
}
</script>

<style>

</style>