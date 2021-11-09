<template>
  <div class="row m-0 p-0 justify-content-center">
    <input type="hidden" id="home_view">
    <div id="categories_home" class="w-100" style="text-align: -webkit-center">
      <Carousel />
      <Categories :categories="categories" />
      <Information />
      <Brands :brands="brands" />
      <Products />
    </div>
  </div>
</template>

<script>
  import Carousel from "./Carousel.vue";
  import Categories from "./Categories.vue";
  import Information from './Information.vue';
  import Brands from './Brands.vue';
  import Products from './Products.vue';

  export default {
    name: 'MainContent',
    components: {
      Carousel,
      Categories,
      Information,
      Brands,
      Products,
    },
    data() {
      return {
        categories: [
          {
            id: 1,
            name: 'Alimento',
            image: 'https://laikapp.s3.amazonaws.com/images_categories/categoria_alimento-min.png'
          },
          {
            id: 2,
            name: 'Snacks',
            image: 'https://laikapp.s3.amazonaws.com/images_categories/categoria_snacks-min.png'
          },
          {
            id: 3,
            name: 'Farmapet',
            image: 'https://laikapp.s3.amazonaws.com/images_categories/categoria_farmacia.png'
          },
          {
            id: 4,
            name: 'Cuidado e Higiene',
            image: 'https://laikapp.s3.amazonaws.com/images_categories/categoria_higiene.png'
          },
          {
            id: 5,
            name: 'Juguetes',
            image: 'https://laikapp.s3.amazonaws.com/images_categories/categoria_juguetes.png'
          },
          {
            id: 6,
            name: 'Accesorios',
            image: 'https://laikapp.s3.amazonaws.com/images_categories/categoria_accesorios.png'
          },
          {
            id: 7,
            name: 'Para PetLovers',
            image: 'https://laikapp.s3.amazonaws.com/images_categories/categoria_petlover.png'
          }
        ],
        brands: [
          {
            id: 1,
            name: 'Hills',
            image: 'https://laikapp.s3.amazonaws.com/dev_images_categories/hills_circulo4.png'
          },
          {
            id: 2,
            name: 'Salvaje',
            image: 'https://laikapp.s3.amazonaws.com/dev_images_categories/1592410196_SALVAJE_FOOD_SAS__1226X1028.PNG'
          },
          {
            id: 3,
            name: 'Total Max',
            image: 'https://s3.us-east-1.amazonaws.com/laikapp/images_categories/total_max_circulo2.png'
          },
          {
            id: 4,
            name: 'Equilibrio',
            image: 'https://s3.us-east-1.amazonaws.com/laikapp/images_categories/EQUILIBRIO_CIRCULO2.png'
          },
          {
            id: 5,
            name: 'Eukanuba',
            image: 'https://s3.us-east-1.amazonaws.com/laikapp/images_categories/eukanuba_circulo1.png'
          },
          {
            id: 6,
            name: 'Royal Canin',
            image: 'https://laikapp.s3.amazonaws.com/images_categories/1589395980_ROYAL_CANIN_500X500.png'
          },
          {
            id: 7,
            name: 'Peluditos Barf',
            image: 'https://s3.us-east-1.amazonaws.com/laikapp/images_categories/PELUDITOS_BARF_logo2.png'
          },
          {
            id: 8,
            name: 'Agility',
            image: 'https://laikapp.s3.amazonaws.com/dev_images_categories/AGILITY_GOLD_CIRCULO_OK2.png'
          }
        ]
      }
    }
  }
</script>