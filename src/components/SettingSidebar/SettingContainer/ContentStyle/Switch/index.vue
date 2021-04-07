<template>

    <v-row justify="space-around" align="center" class="mt-0 pt-0">

        <v-col sm="6" md="6" class="my-0 py-0">

            <v-switch v-model="round" label="محتوا گرد" @change="changeContentSwitch('roundedContent',round)" :color="headerAndSidebar.secondaryBackground" :dark=" directionAndMode.mode == 'dark' " class="my-1 py-0"></v-switch>

        </v-col>

        <v-col sm="6" md="6" class="my-0 py-0">

            <v-switch v-model="elevation" label="سایه محتوا" @change="changeContentSwitch('elevationContent',elevation)" :color="headerAndSidebar.secondaryBackground" :dark=" directionAndMode.mode == 'dark' " class="my-1 py-0"></v-switch>

        </v-col>


        <v-col sm="12" md="12" class="my-0 py-0">

            <v-switch v-model="fluid" label="عنصر والد ما فلوید باشه" @change="changeContentSwitch('containerFluid',fluid)" :color="headerAndSidebar.secondaryBackground" :dark=" directionAndMode.mode == 'dark' " class="my-1 py-0"></v-switch>

        </v-col>

        

    </v-row>

</template>

<script>
export default {
    name:"SwitchHeader",
    created(){
        var content_style = this.$store.state.setting.contentStyle;
        this.round = content_style.roundedContent;
        this.elevation = content_style.elevationContent;
        this.fluid = content_style.containerFluid;
    },
    data:()=>({
        round:false,
        elevation:false,
        fluid:false
    }),
    computed:{
        headerAndSidebar(){
            return this.$store.state.setting.headerAndSidebar;
        },
        directionAndMode(){
            return this.$store.state.setting.directionAndMode;
        }
    },
    methods:{
        changeContentSwitch(modelName,modelStatus){
            return this.$store.commit("changeContentSwitch",{payload:{modelName:modelName , modelStatus:modelStatus}})
        }
    }
}
</script>

<style>

</style>