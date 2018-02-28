<template>
  <v-app id="inspire" style="background-color: white;">
    
    <v-toolbar
      color="white"
      class="black--text"
      dark
      fixed
      app
      clipped-right
    >
      <v-toolbar-side-icon class="black--text" @click.stop="left = !left"></v-toolbar-side-icon>
      <v-toolbar-title>КОМТОРГ</v-toolbar-title>
      
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon color="grey lighten-1">shopping_cart</v-icon>
      </v-btn>
      <v-toolbar-side-icon @click.stop="right = !right">
        <v-icon class="black--text">search</v-icon> 
      </v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer
      v-model="left"
      fixed
      app
      temporary
    >
      <left-drawer></left-drawer>
    </v-navigation-drawer>

    <v-navigation-drawer
      right
      temporary
      v-model="right"
      fixed
    >
     <right-drawer></right-drawer>
    </v-navigation-drawer>

     <v-content>
      
          <about-us></about-us>
          
    </v-content>

    
  </v-app>

</template>
<script>
  import Path from '../../about/AboutUs.vue';
  export default {
    data: () => ({
      drawer: null,
      drawerRight: null,
      right: null,
      left: null
    }),
    props: {
      source: String
    },
    components: {
      'about-us': Path
    }
  }
</script>

<style type="text/css">
  /* проверка изменений 2 */
</style>