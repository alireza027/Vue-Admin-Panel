<template>
      <v-main :class=" directionAndMode.mode == 'dark' && 'grey darken-4' ">

      <v-container :fluid="contentStyle.containerFluid">

        <v-row class="fill-height">

          <v-col>

            <transition :name="contentStyle.transition" mode="out-in">

                <router-view></router-view>

            </transition>

          </v-col>

        </v-row>

      </v-container>

    </v-main>
</template>

<script>

// add files like scss
import '../../assets/styles/other/transition.scss';
export default {
  name:"Content",
  computed:{
    contentStyle(){
      return this.$store.state.setting.contentStyle;
    },
    directionAndMode(){
      return this.$store.state.setting.directionAndMode;
    }
  }
}
</script>

<style>

</style>