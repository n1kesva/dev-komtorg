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
      <login-form></login-form>
      <register-form></register-form>
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
        <v-stepper  v-model="e1" non-linear>
          <v-stepper-header style="box-shadow: none;">
            <v-stepper-step step="1" :complete="e1 > 1">Корзина</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="2" :complete="e1 > 2">Доставка
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3">Оплата</v-stepper-step>
          </v-stepper-header>
          <v-stepper-items flat>
            <v-stepper-content step="1">
              
                <cart-step1></cart-step1>
              
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click.native="e1 = 2">Далее</v-btn>
              <v-btn flat>Отмена</v-btn>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-card color="grey lighten-1" class="mb-5" height="">
                 <cart-step2></cart-step2>
              </v-card>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click.native="e1 = 3">Далее</v-btn>
              <v-btn flat>Назад</v-btn>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-card color="grey lighten-1" class="mb-5" height="">
                 <cart-step3></cart-step3>
              </v-card>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click.native="e1 = 1">Далее</v-btn>
              <v-btn flat>Назад</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
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