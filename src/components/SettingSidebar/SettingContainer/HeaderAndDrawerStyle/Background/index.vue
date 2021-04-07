<template>

  <div>

      <v-toolbar-title :class="directionAndMode.mode == 'dark' ? 'white--text' : 'text--darken-4 text--darken-4' " class="pb-0 mb-1 pr-1">رنگ هدر و سایدبار</v-toolbar-title>

        <v-row justify="space-around" align="center">

            <v-col sm="3" md="3" v-for="pallete in palletes" :key="pallete.id"> 

                <v-tooltip bottom>

                <template v-slot:activator="{ on, attrs }">

                    <v-avatar @click="changeHeaderSidebarColor(pallete.primaryBackground,pallete.primaryColor,pallete.secondaryBackground,pallete.secondaryColor,pallete.primaryDarkBackground,pallete.primaryDarkColor,pallete.secondaryDarkBackground,pallete.secondaryDarkColor,pallete.otherColor,pallete.iconColor)" rounded :color="pallete.primaryBackground" v-ripple class="elevation-4" size="53" v-on="on" v-bind="attrs" style="cursor:pointer"></v-avatar>

                </template>

                <span>{{pallete.tooltipText}}</span>

                </v-tooltip>

            </v-col>

        </v-row>
  </div>
</template>

<script>
export default {
    name:"BackgroundHeaderAndDrawerStyle",
    computed:{
        palletes(){
            return this.$store.state.setting.palletes;
        },
        directionAndMode(){
            return this.$store.state.setting.directionAndMode;
        }
    },
    methods:{
        changeHeaderSidebarColor(primaryBackground , primaryColor , secondaryBackground , secondaryColor , primaryDarkBackground , primaryDarkColor , secondaryDarkBackground , secondaryDarkColor , otherColor , iconColor){
            return this.$store.commit('changeHeaderSidebarColor',{ payload : { primaryBackground , primaryColor , secondaryBackground , secondaryColor , primaryDarkBackground ,primaryDarkColor , secondaryDarkBackground , secondaryDarkColor , otherColor , iconColor} } )
        }
    }
}
</script>

<style>

</style>