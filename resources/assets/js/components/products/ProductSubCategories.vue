<template>
        <v-list  light>
          <template v-for="item in items">
            <v-list-tile v-if="item.icon" v-bind:key="item.title" @click="">
              <v-list-tile-action>
                <v-icon>keyboard_arrow_right</v-icon>
              </v-list-tile-action>
              <v-list-tile-content class="gray--text">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider v-else-if="item.divider"></v-divider>
          </template>
        </v-list>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {   icon: 'home',
              title: 'Морозильные камеры и лари',
          },
          {
              divider: 'true',
          },
          {   icon: 'apps',
              title: 'Плиты',
          },
          {
              divider: 'true',
          },
          {   icon: 'shopping_cart',
              title: 'Стиральные машины',
          },
          {
              divider: 'true',
          },
          {   icon: 'view_list',
              title: 'Холодильники',
          },
          
          
        ]
        
      }
    }
  }
</script>