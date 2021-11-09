<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 m-auto px-1 px-sm-2 px-md-2 px-lg-3">
    <h2 class="col-md-12 text-left pb-4 px-0 font-21 font-weight-bold">
      ¡Más de 100 marcas disponibles!
    </h2>
    <div class="d-flex flex-wrap justify-content-center pb-4 mb-4 border_b_cards">
      <template v-if="!isLoading">
        <div
          v-for="brand in brands" :key="brand.id"
          class="card_brands_home cursor_pointer"
          @click="redirect_filters('brands','',&quot;hills&quot;,{&quot;slug&quot;:&quot;todos&quot;},{&quot;slug&quot;:&quot;todos&quot;},'todo-para-mascota')"
        >
          <img :src="brand.image" :alt="brand.name" class="lazy w-100" :title="brand.name">
        </div>
      </template>
      <template v-else>
        <Spinner />
      </template>
    </div >
  </div>
</template>

<script>
  import laikaApi from '../../api/laikaApi'
  import Spinner from '../../spinner.vue'

  export default {
    components: { Spinner },
    name: 'Brands',
    data() {
      return {
        brands: [
          // {
          //   id: 1,
          //   name: 'Hills',
          //   image: 'https://laikapp.s3.amazonaws.com/dev_images_categories/hills_circulo4.png'
          // },
          // {
          //   id: 2,
          //   name: 'Salvaje',
          //   image: 'https://laikapp.s3.amazonaws.com/dev_images_categories/1592410196_SALVAJE_FOOD_SAS__1226X1028.PNG'
          // },
          // {
          //   id: 3,
          //   name: 'Total Max',
          //   image: 'https://s3.us-east-1.amazonaws.com/laikapp/images_categories/total_max_circulo2.png'
          // },
          // {
          //   id: 4,
          //   name: 'Equilibrio',
          //   image: 'https://s3.us-east-1.amazonaws.com/laikapp/images_categories/EQUILIBRIO_CIRCULO2.png'
          // },
          // {
          //   id: 5,
          //   name: 'Eukanuba',
          //   image: 'https://s3.us-east-1.amazonaws.com/laikapp/images_categories/eukanuba_circulo1.png'
          // },
          // {
          //   id: 6,
          //   name: 'Royal Canin',
          //   image: 'https://laikapp.s3.amazonaws.com/images_categories/1589395980_ROYAL_CANIN_500X500.png'
          // },
          // {
          //   id: 7,
          //   name: 'Peluditos Barf',
          //   image: 'https://s3.us-east-1.amazonaws.com/laikapp/images_categories/PELUDITOS_BARF_logo2.png'
          // },
          // {
          //   id: 8,
          //   name: 'Agility',
          //   image: 'https://laikapp.s3.amazonaws.com/dev_images_categories/AGILITY_GOLD_CIRCULO_OK2.png'
          // }
        ],
        isLoading: false
      }
    },
    created() {
      this.getBrands()
    },
    methods: {
      async getBrands() {
        this.isLoading = true
        const { data } = await laikaApi.get('/brands')
        this.brands = data.data
        this.isLoading = false
      },
      redirect_filters() {
        console.log('redirect_filters')
      }
    }
  }
</script>
