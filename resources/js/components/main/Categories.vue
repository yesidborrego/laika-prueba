<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 m-auto px-1 px-sm-2 px-md-2 px-lg-3">
    <div class="pb-4 fix_categories_slider mt-n4">
      <div class="d-flex justify-content-between px-3">
        <span class="text-left px-0 font-21 font-weight-bold">
          Categorías
        </span>

        <span>
          <a class="font-18 text-secondary btnPrev" @click="bntPrevSlider"></a>
          <a class="font-18 text-secondary btnNext" @click="bntNextSlider"></a>
        </span>
      </div>

      <div class="d-flex flex-wrap justify-content-center border_b_cards pb-4">
        <ul id="light-slider">
          <li v-for="category in categories" :key="category.id">
            <Category :category="category" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Category from "./Category.vue"

  export default {
    name: 'Categories',
    props: {
      categories: {
        type: Array,
        required: true
      }
    },
    components: {
      Category
    },
    data() {
      return {
        optionsSlider: {
          item: 6,
          autoWidth: false,
          slideMove: 1,
          slideMargin: 10,
          controls: false,
          pager: false,
          responsive : [{
                      breakpoint: 1300,
                      settings: {
                          item: 5,
                      }
                  }, {
                      breakpoint: 1024,
                      settings: {
                          item: 4,
                      }
                  }, {
                      breakpoint: 848,
                      settings: {
                          item: 3,
                      }
                  }, {
                      breakpoint: 565,
                      settings: {
                          item: 2,
                      }
                  }],
        }
      }
    },
    mounted() {
      this.sliderLS = $("#light-slider").lightSlider(this.optionsSlider);
    },
    methods: {
      redirect_filters() {
        console.log('redirect_filters')
      },
      bntPrevSlider() {
        this.sliderLS.goToPrevSlide()
      },
      bntNextSlider() {
        this.sliderLS.goToNextSlide()
      },
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