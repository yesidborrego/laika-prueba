<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 m-auto px-1 px-sm-2 px-md-2 px-lg-3">
    <div class="pb-4 fix_categories_slider mt-n4">
      <div class="d-flex justify-content-between px-3">
        <span class="text-left px-0 font-21 font-weight-bold">
          Un universo lleno de ofertas
        </span>

        <span>
          <a class="font-18 text-secondary btnPrev" @click="bntPrevSlider"></a>
          <a class="font-18 text-secondary btnNext" @click="bntNextSlider"></a>
        </span>
      </div>

      <div class="d-flex flex-wrap justify-content-center border_b_cards pb-2">
        <ul id="light-slider-product">
          <li v-for="product in this.products" :key="product.id">
            <Product :product="product" @change_button_stock="change_button_stock" @add_cart="add_cart" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Product from "./Product.vue"

  export default {
    name: 'Products',
    components: {
      Product
    },
    data() {
      return {
        optionsSlider: {
          item: 4,
          autoWidth: false,
          slideMove: 1,
          slideMargin: 10,
          controls: false,
          pager: false,
          responsive : [
            {
              breakpoint: 1300,
              settings: {
                item: 4,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                item: 3,
              }
            },
            {
              breakpoint: 848,
              settings: {
                item: 2,
              }
            },
            {
              breakpoint: 565,
              settings: {
                item: 2,
              }
            }],
        },
        products: [
          {
            id: 1,
            name: 'Desenredante para peinar con Keratina 200 Gr',
            image: 'https://laikapp.s3.amazonaws.com/dev_images_products/43328_Desenredante_para_peinar_con_Keratina_200_Gr_1619043228_0_500x500.jpg',
            details: [
              {
                id: 1,
                name: '165 MILILITRO',
                selected: false
              },
              {
                id: 2,
                name: '180 MILILITRO',
                selected: true
              }
            ],
            discount: 10,
            stars: 5,
            price: 18207,
            price_old: 20230,
            price_member: 16589,
            selected: true
          },
          {
            id: 2,
            name: 'Salvaje Dieta Horneada Natural Carne',
            image: 'https://laikapp.s3.amazonaws.com/dev_images_products/13505_66924_Salvaje_Dieta_Horneada_Natural_Carne_1618354397_500x500.jpg',
            details: [
              {
                id: 1,
                name: '500 GR',
                selected: false
              },
            ],
            discount: 10,
            stars: 4,
            price: 5310,
            price_old: 5900,
            price_member: 4838,
            selected: false
          },
          {
            id: 3,
            name: 'Salvaje Dieta Horneada Natural Pollo',
            image: 'https://laikapp.s3.amazonaws.com/dev_images_products/13507_66928_Salvaje_Dieta_Horneada_Natural_Pollo_1618354517_500x500.jpg',
            details: [
              {
                id: 1,
                name: '500 GR',
                selected: false
              },
            ],
            discount: 10,
            stars: 3,
            price: 5310,
            price_old: 5900,
            price_member: 4838,
            selected: false
          },
          {
            id: 4,
            name: 'Furminator Deslanador Perro Pequeño Pelo Corto',
            image: 'https://laikapp.s3.amazonaws.com/images_products/2664_Furminator_Deslanador_Perro_Peque%C3%B1o_Pelo_Corto_500X500.jpg',
            details: [
              {
                id: 1,
                name: 'Colores Combinados',
                selected: false
              }
            ],
            discount: 10,
            stars: 2,
            price: 76410,
            price_old: 84900,
            price_member: 69618,
          },
          {
            id: 5,
            name: 'Disfraces Americanos - Pet walking spider-man',
            image: 'https://laikapp.s3.amazonaws.com/dev_images_products/70595_Disfraces_Americanos___Pet_walking_spider_man_1633534693_0_500x500.jpg',
            details: [
              {
                id: 1,
                name: 'S',
                selected: false
              },
              {
                id: 2,
                name: 'M',
                selected: false
              }
            ],
            discount: 10,
            stars: 1,
            price: 132700,
            price_old: 136100,
            price_member: 112795,
          }
        ],
      }
    },
    mounted() {
      this.sliderLSP = $("#light-slider-product").lightSlider(this.optionsSlider);
    },
    methods: {
      redirect_filters() {
        console.log('redirect_filters')
      },
      bntPrevSlider() {

        this.sliderLSP.goToPrevSlide()
      },
      bntNextSlider() {
        this.sliderLSP.goToNextSlide()
      },
      open_popup_laikamember() {
        console.log('open_popup_laikamember')
      },
      change_button_stock() {
        console.log('change_button_stock')
      },
      change_button_stock({detailId, productId}) {
        const indexProduct = this.products.findIndex(product => product.id === productId)
        for (const detail of this.products[indexProduct].details) {
          detail.selected = (detail.id === detailId)
        }
      },
      add_cart(product) {
        console.log('add_cart:', product)
      }
    }
  }
</script>

<style scoped>
  .btnPrev, .btnNext {
    display: inline-block;
    background-image: url(https://laika.com.co/assets/controls.png);
    cursor: pointer;
    width: 35px;
    height: 32px;
    background-color: #fff;
  }

  .btnPrev {
    background-position:0 0;
  }

  .btnNext {
    background-position:-33px 0;
  }

</style>