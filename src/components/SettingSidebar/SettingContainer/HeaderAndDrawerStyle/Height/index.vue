<template>

  <div>
    
    <v-toolbar-title :class="directionAndMode.mode == 'dark' ? 'white--text' : 'text--darken-4 text--darken-4' " class="pb-0 mb-3 mt-2 pr-1">ارتفاع هدر و سایدبار</v-toolbar-title>

    <v-row justify="space-around" align="center" class="mt-0 pt-0">

      <v-col sm="12" md="12" class="my-0 py-0">

        <v-slider @change="changeHeaderSidebarHeight(height)" v-model="height" max="80" min="50" :color="headerAndSidebar.primaryBackground" :thumb-color="headerAndSidebar.primaryBackground" :track-color="headerAndSidebar.secondaryBackground" :thumb-size="26" thumb-label></v-slider>

      </v-col>

    </v-row>

  </div>

</template>

<script>
export default {
  name: "HeightHeaderAndDrawerStyle",
  data: () => ({
    height: 0,
  }),
  created(){
    this.height = this.$store.state.setting.headerAndSidebar.heightHeaderSidebar;
  },
  computed:{
    headerAndSidebar(){
        return this.$store.state.setting.headerAndSidebar;
    },
    directionAndMode(){
        return this.$store.state.setting.directionAndMode;
    }
  },
  methods:{
    changeHeaderSidebarHeight(height){
      return this.$store.commit('changeHeaderSidebarHeight',height)
    }
  }
};
</script>

<style></style>
