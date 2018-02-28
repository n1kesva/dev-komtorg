<template>
  <v-layout >
    <v-flex xs12 sm6 offset-sm3 >
      <span v-for="item in items" :key="item.kod" @click="">
        
       <v-card flat raised >
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ item.title }}</div>
            <div class="headline">{{ item.price }} грн.</div>
            <span class="grey--text">код {{ item.kod }}</span>
          </div>
        </v-card-title>
        <v-card-actions class="white">
                <div class="text-xs-center">
                  <v-chip outline color="primary" icon @click.native="item.show = !item.show">Описание товара
                    <v-icon>{{ item.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                  </v-chip>

                </div> 
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>favorite_border</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="grey lighten-1">shopping_cart</v-icon>
                </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="item.show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.

          </v-card-text>
        </v-slide-y-transition>
        <v-card-media>
          <v-carousel hide-delimiters style="box-shadow: none;">
            <v-carousel-item  v-for="i in item.src" v-bind:src="i.img" :key="i"></v-carousel-item>
          </v-carousel>
        </v-card-media>
        
        
      </v-card>
      <v-divider></v-divider>
     </span>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {   
              kod: '6726',
              title: 'Холодильник Gorenje NRK 6202 MX',
              description: 'Тип холодильника  двухкамерный Морозильная камера  нижнее расположение',
              src: [ { img: '/Img/00000006726.jpg'},
                     { img: '/Img/00000007258.jpg'},
                     { img: '/Img/00000007216.jpg'},
                    ],
              price: '16999',
              show: false
          },
          {   kod: '6726',
              title: 'Холодильник Gorenje NRK 6202 MX',
              description: 'Тип холодильника  двухкамерный Морозильная камера  нижнее расположение',
              src: [ { img: '/Img/00000006726.jpg'},
                     { img: '/Img/00000007258.jpg'},
                     { img: '/Img/00000007216.jpg'},
                    ],
              price: '13999',
              show: false
            
          },
          {   kod: '6726',
              title: 'Холодильник Gorenje NRK 6202 MX',
              description: 'Тип холодильника  двухкамерный Морозильная камера  нижнее расположение',
              src: [ { img: '/Img/00000006726.jpg'},
                     { img: '/Img/00000007258.jpg'},
                     { img: '/Img/00000007216.jpg'},
                    ],
              price: '12599',
              show: false
            
          },

        ]
        
      }
    }
  }
</script>