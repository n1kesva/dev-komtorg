<template>
  <v-app id="inspire">
    
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
      
      <send-password></send-password>
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
      
          <main-poster></main-poster>
          <register-invation></register-invation>
          
    </v-content>

    
  </v-app>

</template>

<script>
  import Path1 from '../../welcome/MainPoster.vue';
  import Path2 from '../../welcome/RegisterInvation.vue';
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
      'main-poster': Path1,
      'register-invation': Path2,

    }
  }
</script>

<style type="text/css">
  /* проверка изменений 2 */
</style>