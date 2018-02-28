<template>
        <v-stepper  v-model="e1" non-linear style="box-shadow: none;">
          <v-stepper-header>
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
              <v-card color="white" class="mb-5" flat height="">
                 <cart-step2></cart-step2>
              </v-card>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click.native="e1 = 3">Далее</v-btn>
              <v-btn flat @click.native="e1 = 1">Назад</v-btn>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-card color="white" class="mb-5" flat height="">
                 <cart-step3></cart-step3>
              </v-card>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click.native="e1 = 1">Далее</v-btn>
              <v-btn flat @click.native="e1 = 2">Назад</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
</template>

<script>
  import cartstep1Path from './CartStep1.vue';
  import cartstep2Path from './CartStep2.vue';
  import cartstep3Path from './CartStep3.vue';
  export default {
    data () {
      return {
        e1: 0
      }
    },
    components: {
      'cart-step1': cartstep1Path,
      'cart-step2': cartstep2Path,
      'cart-step3': cartstep3Path,
    }
  }
</script>