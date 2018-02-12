<template>
  <v-layout >
    <v-flex xs12 sm6 offset-sm3>
      <v-card raised v-for="item in items" :key="item.kod" @click="">
        
        
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ item.title }}</div>
            <v-spacer></v-spacer>
            <div class="headline">{{ item.price }} грн.</div>
            <span class="grey--text">код {{ item.kod }}</span>
          </div>
        </v-card-title>
        
        
        <v-card-actions class="white">
                
                <v-btn icon>
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn>
                
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
           {{ item.description }}
          </v-card-text>
        </v-slide-y-transition>
        <v-card-media>
          <v-carousel hide-delimiters>
            <v-carousel-item v-for="i in item.src" v-bind:src="i.img" :key="i"></v-carousel-item>
          </v-carousel>
        </v-card-media>
        <span class="grey--text">{{ item.description }}</span>
        <v-btn icon @click.native="show = !show">
                  <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
      </v-card>
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
          },
          {   kod: '6726',
              title: 'Холодильник Gorenje NRK 6202 MX',
              description: 'Тип холодильника  двухкамерный Морозильная камера  нижнее расположение',
              src: [ { img: '/Img/00000006726.jpg'},
                     { img: '/Img/00000007258.jpg'},
                     { img: '/Img/00000007216.jpg'},
                    ],
              price: '13999',
            
          },
          {   kod: '6726',
              title: 'Холодильник Gorenje NRK 6202 MX',
              description: 'Тип холодильника  двухкамерный Морозильная камера  нижнее расположение',
              src: [ { img: '/Img/00000006726.jpg'},
                     { img: '/Img/00000007258.jpg'},
                     { img: '/Img/00000007216.jpg'},
                    ],
              price: '12599',
            
          },

        ]
        
      }
    }
  }
</script>

<style type="text/css">
  
  .card {
  display: block;
  border-radius: 2px;
  min-width: 0;
  position: relative;
  text-decoration: none;
  -webkit-box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
          box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
}
.card > *:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.card > *:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}
.card--raised {
  -webkit-box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
          box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
}
.card--tile {
  border-radius: 0;
}
.card--flat {
  -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12);
          box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12);
}
.card--hover {
  cursor: pointer;
  -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  -webkit-transition-property: -webkit-box-shadow;
  transition-property: -webkit-box-shadow;
  transition-property: box-shadow;
  transition-property: box-shadow, -webkit-box-shadow;
}
.card--hover:hover {
  -webkit-box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
          box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
}
.card__title {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  padding: 16px;
}
.card__title--primary {
  padding-top: 24px;
}
.card__text {
  padding: 16px;
  width: 100%;
}
.card__media {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  position: relative;
}
.card__media img {
  width: 100%;
}
.card__media__background {
  border-radius: inherit;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.card__media__content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  position: relative;
}
.card__actions {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 8px 4px;
}
.card__actions > *,
.card__actions .btn {
  margin: 0 4px;
}
.carousel {
  height: 500px;
  width: 100%;
  position: relative;
  overflow: hidden;
  -webkit-box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
          box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
}
.carousel__item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-flex: 1;
      -ms-flex: 1 0 100%;
          flex: 1 0 100%;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  -webkit-transition: 0.2s ease-out;
  transition: 0.2s ease-out;
}
.carousel__left,
.carousel__right {
  position: absolute;
  top: 50%;
  z-index: 1;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}
.carousel__left .btn,
.carousel__right .btn {
  color: #fff;
  margin: 0 !important;
  height: auto;
  width: auto;
}
.carousel__left .btn i,
.carousel__right .btn i {
  font-size: 48px;
}
.carousel__left .btn:hover,
.carousel__right .btn:hover {
  background: black;
}
.carousel__left {
  left: 5px;
}
.carousel__right {
  right: 5px;
}
.carousel__controls {
  background: rgba(0,0,0,0.5);
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  left: 0;
  position: absolute;
  height: 50px;
  list-style-type: none;
  width: 100%;
  z-index: 1;
}
.carousel__controls__item {
  color: #fff;
  margin: 0 1rem !important;
}
.carousel__controls__item i {
  opacity: 0.5;
  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.carousel__controls__item--active i {
  opacity: 1;
  vertical-align: middle;
  font-size: 2rem !important;
}
.carousel__controls__item:hover {
  background: black;
}
.carousel__controls__item:hover i {
  opacity: 0.8;
}
</style>