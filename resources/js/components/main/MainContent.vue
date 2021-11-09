<template>
  <div class="row m-0 p-0 justify-content-center">
    <input type="hidden" id="home_view">
    <div id="categories_home" class="w-100" style="text-align: -webkit-center">
      <Carousel />
      <Categories />
      <Information />
      <Brands />
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
    }
  }
</script>