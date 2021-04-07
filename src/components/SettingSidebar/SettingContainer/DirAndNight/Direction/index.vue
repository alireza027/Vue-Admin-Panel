<template>
  <v-row justify="space-around">
      <v-col sm="6" md="6">
        <v-btn block large @click="changeDirection(`rtl`)" :class="directionAndMode.direction == 'rtl' ? `${headerAndSidebar.primaryBackground} ${headerAndSidebar.primaryColor}` : 'grey lighten-3' "> 
            <v-row justify="space-between" align="center">
                <v-col><v-icon left :color="directionAndMode.direction == 'rtl' ? headerAndSidebar.iconColor : headerAndSidebar.otherColor ">mdi-format-textdirection-l-to-r</v-icon></v-col>
                <v-col><div class="title">راست</div></v-col>
            </v-row>
        </v-btn>
    </v-col>

    <v-col sm="6" md="6">
        <v-btn block large @click="changeDirection(`ltr`)" :class="directionAndMode.direction == 'ltr' ? `${headerAndSidebar.primaryBackground} ${headerAndSidebar.primaryColor}` : 'grey lighten-3' "> 
            <v-row justify="space-between" align="center">
                <v-col><v-icon left :color="directionAndMode.direction == 'ltr' ? headerAndSidebar.iconColor : headerAndSidebar.otherColor ">mdi-format-textdirection-r-to-l</v-icon></v-col>
                <v-col><div class="title">چپ</div></v-col>
            </v-row>
        </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
    name:"Direction",
    computed:{
        directionAndMode(){
            return this.$store.state.setting.directionAndMode;
        },
        headerAndSidebar(){
            return this.$store.state.setting.headerAndSidebar;
        }
    },
    methods:{
        changeDirection(direction){
            this.$vuetify.rtl = direction == "rtl" ? true : false;
            return this.$store.commit('changeDirection',direction);
        }
    }
}
</script>

<style>

</style>