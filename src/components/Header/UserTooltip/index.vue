<template>
  <v-menu bottom offset-y>

        <template v-slot:activator="{ on: menu, attrs }">

          <v-tooltip bottom>

            <template v-slot:activator="{ on: tooltip }">

              <v-btn icon class="ml-n1" rounded v-bind="attrs" v-on="{ ...tooltip, ...menu}">
                <v-icon>mdi-account</v-icon>
              </v-btn>

            </template>

            <span>کاربر</span>

          </v-tooltip>

        </template>

        <v-list :color="headerAndSidebar.primaryBackground" elevation="15">

          <v-list-item link exact v-for="user in userHeader" :key="user.id" :to="user.href">

            <v-icon small class="mr-n2 ml-2" :color="headerAndSidebar.iconColor">{{user.icon}}</v-icon>

            <v-list-item-content>
              <v-list-item-title  class="white--text">{{user.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list>

      </v-menu>
</template>

<script>
export default {
    name:"UserTooltip",
    data:()=>({

    }),
    computed:{
        // user header
        userHeader(){
            return this.$store.state.header.user;
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