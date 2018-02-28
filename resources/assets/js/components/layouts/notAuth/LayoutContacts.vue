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
          <contacts></contacts>
    </v-content>

    
  </v-app>

</template>
<script>
  import Path from '../../about/Contacts.vue';
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
      'contacts': Path
    }
  }
</script>

<style type="text/css">
  /* проверка изменений 2 */
</style>