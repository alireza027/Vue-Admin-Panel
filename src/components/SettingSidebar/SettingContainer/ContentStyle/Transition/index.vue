<template>
  <div>
        <v-toolbar-title :class="directionAndMode.mode == 'dark' ? 'white--text' : 'text--darken-4 text--darken-4' " class="pb-0 mb-1 mt-3 pr-1">نوع انیمیشن محتوا</v-toolbar-title>

        <v-row justify="space-around"  align="center">
            
            <v-col sm="6" md="6" v-for="transition in transitionContent" :key="transition.id">
                <v-btn style="font-weight-bold" @click="changeContentTransition(transition.content)" :class="contentStyle.transition == transition.content ? `${headerAndSidebar.primaryBackground} ${headerAndSidebar.primaryColor}` : 'grey lighten-3' " large block>{{transition.name}}</v-btn>
            </v-col>

        </v-row>
  </div>
</template>

<script>
export default {
    name:"TransitionContent",
    computed:{
        transitionContent(){
            return this.$store.state.setting.transitionList;
        },
        headerAndSidebar(){
            return this.$store.state.setting.headerAndSidebar;
        },
        contentStyle(){
            return this.$store.state.setting.contentStyle;
        },
        directionAndMode(){
            return this.$store.state.setting.directionAndMode;
        }
    },
    methods:{
        changeContentTransition(transitionName){
            return this.$store.commit("changeContentTransition",transitionName);
        }
    }
}
</script>

<style>

</style>