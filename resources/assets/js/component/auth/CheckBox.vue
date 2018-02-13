<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 md6>
        
        <v-card flat>
          <v-card-text>
            <v-checkbox label="Запомнить меня"  v-model="ex1" light></v-checkbox>
          </v-card-text>
        </v-card>
      </v-flex>
      
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        ex1: true,
        
      }
    }
  }
</script>