<template>
  <v-menu bottom offset-y>

            <template v-slot:activator="{ on: menu, attrs }">

            <v-tooltip bottom>

                <template v-slot:activator="{ on: tooltip }">

                <v-btn icon class="ml-n1" rounded v-bind="attrs" v-on="{ ...tooltip, ...menu}" @click="toggleSettingMutation">
                    <v-icon>mdi-cog</v-icon>
                    
                </v-btn>

                </template>

                <span>تنظیمات</span>

            </v-tooltip>

            </template>

      </v-menu>
</template>

<script>
export default {
    data:()=>({

    }),
    computed:{
        getSettingToggleState(){
            return this.$store.state.header.settingDrawer
        },
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