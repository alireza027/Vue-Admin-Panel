<template>
    <v-list class="just-content">
      
      
        <v-list-group active-class="active-when-click" v-for="(item,index) in sidebarContent" :key="index" :value="activeItem(`${item.name}`,0)" :prepend-icon="item.icon" class="icons-white">

          <template v-slot:activator>

            <v-list-item-title color="white" class="white--text">{{item.text}}</v-list-item-title>

          </template>
          

          <span v-for="(parent,index) in item.item" :key="index">

            <!-- if we haven't child -->
            <v-list-item  :key="parent.key" class="main-menu-item add-padding-right" active-class="active-when-click-3" link exact :to="parent.href" v-if="parent.children === undefined">

              <v-list-item-icon>

                <v-icon >{{ parent.icon }}</v-icon>

              </v-list-item-icon>

              <v-list-item-content>

                <v-list-item-title class="white--text">{{parent.title}}</v-list-item-title>

              </v-list-item-content>

            </v-list-item>


            <!-- if we have a child show child and create loop -->

            <v-list-group sub-group active-class="active-when-click-2" :prepend-icon="parent.icon" :value="activeItem(`${parent.name}`,1)" class="icons-white" v-else>

              <template v-slot:activator>

                <v-list-item-title color="white" class="white--text">{{parent.text}}</v-list-item-title>

              </template>

              <v-list-item v-for="(child,index) in parent.children" class="sub-menu-group-item" :key="index" link exact active-class="active-group-item" :to="child.href" >

                <v-list-item-icon><v-icon >{{ child.icon }}</v-icon></v-list-item-icon>

                <v-list-item-content>

                  <v-list-item-title class="white--text">{{child.title}}</v-list-item-title>

                </v-list-item-content>

              </v-list-item>

            </v-list-group>

          </span>

        </v-list-group>

      </v-list>


      <!-- divider -->
      
</template>


<script>
export default {
    name:"NavigationMenus",
    computed:{
        sidebarContent(){
            return this.$store.state.sidebar.sidebar
        },
    },
    methods:{
        activeItem(address,index){
            var path = this.$route.path;
            var splitedPath = path.split("/");
            splitedPath.shift();
                if(address == splitedPath[index]){
                    return true
                } else {
                    return false;
                }
            },
        headerAndSidebar(){
          return this.$store.state.setting.headerAndSidebar;
        },
      },
    }

</script>