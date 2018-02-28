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
      <q-radio v-model="option" val="opt1" label="Option 1" />
<q-radio v-model="option" val="opt2" label="Option 2" />
<q-radio v-model="option" val="opt3" label="Option 3" />
      <v-spacer></v-spacer>
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
      <rightdrawer-component></rightdrawer-component>
    </v-navigation-drawer>

    <v-navigation-drawer
      right
      temporary
      v-model="right"
      fixed
    >
     <leftdrawer-component></leftdrawer-component>
    </v-navigation-drawer>

     <v-content>
      
          <cards-component></cards-component>
          
    </v-content>

    
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      drawerRight: null,
      right: null,
      left: null
    }),
    props: {
      source: String
    }
  }
</script>

<style type="text/css">
  /* проверка изменений 2 */
</style>