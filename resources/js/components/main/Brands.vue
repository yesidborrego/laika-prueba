<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 m-auto px-1 px-sm-2 px-md-2 px-lg-3">
    <h2 class="col-md-12 text-left pb-4 px-0 font-21 font-weight-bold">
      ¡Más de 100 marcas disponibles!
    </h2>
    <div class="d-flex flex-wrap justify-content-center pb-4 mb-4 border_b_cards">
      <div
        v-for="brand in brands" :key="brand.id"
        class="card_brands_home cursor_pointer"
        @click="redirect_filters('brands','',&quot;hills&quot;,{&quot;slug&quot;:&quot;todos&quot;},{&quot;slug&quot;:&quot;todos&quot;},'todo-para-mascota')"
      >
        <img :src="brand.image" :alt="brand.name" class="lazy w-100" :title="brand.name">
      </div>
    </div >
  </div>
</template>

<script>
  export default {
    name: 'Brands',
    props: {
      brands: {
        type: Array,
        required: true
      }
    },
    methods: {
      redirect_filters() {
        console.log('redirect_filters')
      }
    }
  }
</script>
