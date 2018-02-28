<template>
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