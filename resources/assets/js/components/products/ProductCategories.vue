<template>

  <v-expansion-panel expand>
    <v-expansion-panel-content v-for="item in items" :key="item.title" >
      <div slot="header">{{ item.title }}</div>
      <v-card>
        <product-subcategories></product-subcategories>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
  import Path from './ProductSubCategories.vue';
  export default {
    data () {
      return {
        items: [
          {   icon: 'home',
              title: 'Крупная бытовая техника',
          },
         
          {   icon: 'apps',
              title: 'Аудио-видео техника',
          },
          
          {   icon: 'shopping_cart',
              title: 'Встраиваемая техника',
          },
          {   icon: 'view_list',
              title: 'Мелкая бытовая техника',
          },
          {   icon: 'favorite_border',
              title: 'Климатическое оборудование', 
          },
                   
          {   icon: 'info',
              title: 'Аксессуары',
          },
          {   icon: 'chat',
              title: 'Разное',
          },
        ]
        
      }
    },
    components: {
      'product-subcategories': Path,
    }
  }
</script>