<template>
      <v-menu bottom offset-y>

        <template v-slot:activator="{ on: menu, attrs }">

          <v-tooltip bottom>

            <template v-slot:activator="{ on: tooltip }">
              <v-btn
                icon class="ml-n1" rounded v-bind="attrs" v-on="{ ...tooltip, ...menu }" >
                <v-icon>mdi-file-document</v-icon>
              </v-btn>

            </template>

            <span>اسناد</span>

          </v-tooltip>

        </template>



        <!-- use document -->
        <v-list :color="headerAndSidebar.primaryBackground" elevation="15">

          <v-list-item link exact v-for="document in documentHeader" :key="document.id" :to="document.href">

            <v-icon small class="mr-n2 ml-2" :color="headerAndSidebar.iconColor">{{document.icon}}</v-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{document.title}}</v-list-item-title>
            </v-list-item-content>

          </v-list-item>

        </v-list>
        
      </v-menu>
</template>

<script>
export default {
    name:"DocumentTooltip",
    data:()=>({

    }),
    computed:{
        // document header
        documentHeader(){
            return this.$store.state.header.document;
        },


        // header and sidebar
        headerAndSidebar(){
          return this.$store.state.setting.headerAndSidebar;
        },
        

        // direction and mode 
        directionAndMode(){
          return this.$store.state.setting.directionAndMode;
        }
    }
}
</script>

<style>

</style>