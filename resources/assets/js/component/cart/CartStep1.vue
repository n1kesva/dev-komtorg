<template>
  <v-flex xs12>
        <span v-for="item in items" :key="item.kod" @click="">
         <v-container
            fluid
            style="min-height: 0; background-color: white; padding: 5px; "
            grid-list-lg
          >
           
            
             <v-card color="" style="box-shadow: none;">
              <v-container fluid
                            style="min-height: 0;"
                            grid-list-lg>
                <v-layout row wrap>
                  <v-flex xs2>
                    <v-card-media
                      v-bind:src="item.src[1].img"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                  <v-flex xs2>
                    <div>
                      <div class="headline">{{ item.title }}</div>
                      
                      <div class="grey--text">код {{ item.kod }}</div>
                    </div>
                  </v-flex>
                  <v-flex xs2>
                    <v-spacer></v-spacer>
                    <div class="headline">{{ item.price }} грн.</div>
                  </v-flex>
                  <v-flex xs2>
                    <div class="headline">1 шт.</div>
                  </v-flex>
                  <v-flex xs2>
                   <div class="headline">{{ item.price }} грн.</div>
                  </v-flex>
                  <v-flex xs2>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>favorite_border</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon color="grey lighten-1">delete</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          
       
      
   </v-layout>
  </v-container>
 </span> 
</v-flex> 
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
              src: [ { img: '/Img/00000007258.jpg'},
                     { img: '/Img/00000006726.jpg'},
                     { img: '/Img/00000007216.jpg'},
                    ],
              price: '13999',
              show: false
            
          },
          {   kod: '6726',
              title: 'Холодильник Gorenje NRK 6202 MX',
              description: 'Тип холодильника  двухкамерный Морозильная камера  нижнее расположение',
              src: [ { img: '/Img/00000007216.jpg'},
                     { img: '/Img/00000007258.jpg'},
                     { img: '/Img/00000006726.jpg'},
                    ],
              price: '12599',
              show: false
            
          },

        ]
        
      }
    }
  }
</script>