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
          <template v-if="!isLoading">
            <ul id="light-slider-product">
              <li v-for="product in this.products" :key="product.id">
                  <Product :product="product" @change_button_stock="change_button_stock" @add_cart="add_cart" />
              </li>
            </ul>
          </template>
          <template v-else>
            <Spinner />
          </template>
        </div>
    </div>
  </div>
</template>

<script>
  import laikaApi from '../../api/laikaApi'
  import Spinner from '../spinner.vue'
  import Product from "./Product.vue"

  export default {
    name: 'Products',
    components: {
      Product,
      Spinner
    },
    data() {
      return {
        optionsSlider: {
          item: 4,
          autoWidth: true,
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
        products: [],
        isLoading: false,
      }
    },
    created() {
      this.getProducts()
    },
    updated() {
      this.sliderLSP = $("#light-slider-product").lightSlider(this.optionsSlider);
    },
    methods: {
      async getProducts() {
        this.isLoading = true
        try {
          const { data } = await laikaApi.get('/products')
          this.products = data.data
          this.isLoading = false
        } catch (error) {
          console.log(error)
        }
      },
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