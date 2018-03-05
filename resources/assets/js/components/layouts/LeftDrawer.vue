<template>
  <v-navigation-drawer permanent light>
    <v-toolbar flat>
      <!-- <v-list class="sva-list"> -->
        <!-- <v-list-tile class="sva-list-tile"> -->
          <!-- <v-list-tile-title class="title"> -->
            <login-form></login-form>|
            <register-form></register-form>
          <!-- </v-list-tile-title> -->
        <!-- </v-list-tile> -->
      <!-- </v-list> -->
    </v-toolbar>
    <v-divider></v-divider>
<!--     <v-list dense class="pt-0">
  <v-list-tile v-for="item in items" :key="item.title" @click="">
    <v-list-tile-action>
      <v-icon>{{ item.icon }}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</v-list> -->
       <v-list  light>
          <template v-for="item in items">
            
              <v-list-tile v-if="item.icon" :key="item.title" >
                <v-list-tile-action>
                  <router-link class="app-no-underline" :to="item.path">
                    <v-icon>{{ item.icon }}</v-icon>
                  </router-link>
                </v-list-tile-action>
                <v-list-tile-content class="gray--text">
                  <router-link class="app-no-underline" :to="item.path">
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </router-link>
                </v-list-tile-content>
              </v-list-tile>
            
            <v-divider v-else-if="item.divider"></v-divider>
          </template>
        </v-list>
        
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {   icon: 'home',
              title: 'Главная',
              path: '/',
          },
          {
              divider: 'true',
          },
          {   icon: 'apps',
              title: 'Каталог товаров',
              path: '/product-categories',
          },
          {
              divider: 'true',
          },
          {   icon: 'shopping_cart',
              title: 'Корзина',
              path: '/cart',
          },
          {   icon: 'view_list',
              title: 'Мои заказы',
              path: '/cart',
          },
          {   icon: 'favorite_border',
              title: 'Список желаний', 
              path: '/cart',
          },
          {
              divider: 'true',
          },          
          {   icon: 'info',
              title: 'Все о Комторге',
              path: '/about-us',
          },
          {   icon: 'chat',
              title: 'Обратная связь',
              path: '/contacts',
          },
        ]
        
      }
    }
  }
</script>

<style>
  .app-no-underline {
    text-decoration: none;
  }
</style>

