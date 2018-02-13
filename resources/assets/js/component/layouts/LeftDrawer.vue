<template>
  <v-navigation-drawer permanent light>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">

          </v-list-tile-title>
        </v-list-tile>
      </v-list>
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
            <v-list-tile v-if="item.icon" v-bind:key="item.title" @click="">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content class="gray--text">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
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
          },
          {
              divider: 'true',
          },
          {   icon: 'apps',
              title: 'Каталог товаров',
          },
          {
              divider: 'true',
          },
          {   icon: 'shopping_cart',
              title: 'Корзина',
          },
          {   icon: 'view_list',
              title: 'Мои заказы',
          },
          {   icon: 'favorite_border',
              title: 'Список желаний', 
          },
          {
              divider: 'true',
          },          
          {   icon: 'info',
              title: 'Все о Комторге',
          },
          {   icon: 'chat',
              title: 'Обратная связь',
          },
        ]
        
      }
    }
  }
</script>
