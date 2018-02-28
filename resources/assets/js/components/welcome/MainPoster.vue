<template>
  <v-carousel hide-delimiters>
    <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/Img/mainPoster/baloon.jpg'
          },
          {
            src: '/Img/mainPoster/gee.jpg'
          },
          {
            src: '/Img/mainPoster/val.jpg'
          }
        ]
      }
    }
  }
</script>


<style type="text/css">
  

</style>