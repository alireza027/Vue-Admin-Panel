<template>

    <v-row justify="space-around" align="center" class="mt-0 pt-0">

        <v-col sm="6" md="6" class="my-0 py-0">
            <v-switch style="" v-model="fixed" @change="changeHeaderSidebarSwitch('fixHeader',fixed)" label="هدر فیکس" :color="headerAndSidebar.secondaryBackground " :dark=" directionAndMode.mode == 'dark' " class="my-1 py-0"></v-switch>
        </v-col>

        <v-col sm="6" md="6" class="my-0 py-0">
            <v-switch v-model="elevation" @change="changeHeaderSidebarSwitch('elevationHeader',elevation)" label="سایه هدر" :color="headerAndSidebar.secondaryBackground" :dark=" directionAndMode.mode == 'dark' " class="my-1 py-0"></v-switch>
        </v-col>

        <v-col sm="6" md="6" class="my-0 py-0">
            <v-switch v-model="shared" @change="changeHeaderSidebarSwitch('sharedHeader',shared)" label="هدر گرد" :color="headerAndSidebar.secondaryBackground" :dark=" directionAndMode.mode == 'dark' " class="my-1 py-0"></v-switch>
        </v-col>

        <v-col sm="6" md="6" class="my-0 py-0">
            <v-switch v-model="floating" @change="changeHeaderSidebarSwitch('floatingHeader',floating)" label="هدر فلوت" :color="headerAndSidebar.secondaryBackground" :dark=" directionAndMode.mode == 'dark' " class="my-1 py-0"></v-switch>
        </v-col>

        <v-col sm="12" md="12" class="my-0 py-0">
            <v-switch v-model="scrollElevation" @change="changeHeaderSidebarSwitch('scrollElevationHeader',scrollElevation)" label="زمان اسکرال هدر سایه داشته باشد" :dark=" directionAndMode.mode == 'dark' " :color="headerAndSidebar.secondaryBackground" class="my-1 py-0"></v-switch>
        </v-col>

        <v-col sm="12" md="12" class="my-0 py-0">
            <v-switch v-model="scrollHide" @change="changeHeaderSidebarSwitch('scrollHideHeader',scrollHide)" label="زمان اسکرال هدر پنهان بشود" :color="headerAndSidebar.secondaryBackground" :dark=" directionAndMode.mode == 'dark' " class="my-1 py-0"></v-switch>
        </v-col>

        <v-col sm="12" md="12" class="my-0 py-0">
            <v-switch v-model="expandHover" @change="changeHeaderSidebarSwitch('expandHoverDrawer',expandHover)" label="باز شدن سایدبار به کمک هاور موس" :dark=" directionAndMode.mode == 'dark' " :color="headerAndSidebar.secondaryBackground" class="my-1 py-0"></v-switch>
        </v-col>


    </v-row>

</template>

<script>
export default {
    name:"SwitchHeader",
    data(){
        return {
            fixed:false,
            elevation:false,
            shared:false,
            floating:false,
            scrollElevation:false,
            scrollHide:false,
            expandHover:false,
        }
    },
    created(){
        var header_sidebar = this.$store.state.setting.headerAndSidebar;
        this.fixed = header_sidebar.fixHeader;
        this.elevation = header_sidebar.elevationHeader;
        this.shared = header_sidebar.sharedHeader;
        this.floating = header_sidebar.floatingHeader;
        this.scrollElevation = header_sidebar.scrollElevationHeader;
        this.scrollHide = header_sidebar.scrollHideHeader;
        this.expandHover = header_sidebar.expandHoverDrawer;
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
         changeHeaderSidebarSwitch(modelName,modelStatus){
            return this.$store.commit("changeHeaderSidebarSwitch",{payload:{modelName:modelName,modelStatus:modelStatus}});
        }
    }
}
</script>

<style>

</style>