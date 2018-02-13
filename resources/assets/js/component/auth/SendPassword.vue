<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn color="primary" flat slot="activator">Восстановить пароль</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Восстановление пароля</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Отмена</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Отправить мне на почту</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>            

<script>
  export default {
    data () {
      return {
        dialog: false
      }
    }
  }
</script>

