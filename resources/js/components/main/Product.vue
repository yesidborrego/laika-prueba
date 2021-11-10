<template>
  <div class="box_products position-relative font-weight-bold">
    <span id="product_out_of_stock_dog_4412">
      <div class=""></div>
    </span>
    <div class="border_card_products">
      <span class="badge badge_card_product" id="dog_reference_promotion_4412">
        <img src="https://laika.com.co/assets/star.svg" class="lazy" width="70">
        <div class="font-weight-bold text_badge_product_card_top" id="dog_value_reference_promotion_4412" style="top: 47%; font-size: 20px;">{{ productCard.discount }}%</div>
        <div class="font_nova_bold text_badge_product_card_bottom" style="display: none;">DESCUENTO</div>
      </span>
      <div class="row classss justify-content-center">
        <!-- <a href="#">
          <img id="img_product_dog_4412" class="img_card_products ml-auto mr-auto mt-3 mb-3 lazy" :alt="productCard.name" style="width: 180px;" :src="productCard.image" />
        </a> -->
        <router-link :to="{ name: 'ProductDetail', params: { id: productCard.id } }">
          <img id="img_product_dog_4412" class="img_card_products ml-auto mr-auto mt-3 mb-3 lazy" :alt="productCard.name" style="width: 180px;" :src="productCard.image" />
        </router-link>
      </div>
      <div class="card_products ml-3 mt-1 mr-3 text-left">
        <router-link :to="{ name: 'ProductDetail', params: { id: productCard.id } }">
          <h3 class="mb-2 text_product_card font-weight-bold" data-toggle="tooltip" data-placement="top" :title="productCard.name">{{ productCard.name }}</h3>
        </router-link>
        <p class="mb-1">
            <i
              v-for="(star, index) of productCard.stars" :key="index"
              class="fa-xs fa fa-star card_star">
            </i>
        </p>
        <p class="h6 m-0 heigh_container_info_cards">
          <span id="price_products_dog_4412">
            <span class="mr-1 font-weight-bold" id="price_dog_4412">${{ new Intl.NumberFormat('es-CO').format(productCard.price) }}</span>
            <span class="ml-2 text_old_product ">
              <span>Antes</span>
              <br>
              <del class="text_old_price font-11" id="price_old_dog_4412">${{ new Intl.NumberFormat('es-CO').format(productCard.price_old) }}</del>
            </span>
            <span class="row m-0 pt-1 mt-1 line_throught_info_cards_top">
              <span class="mr-1 color_laika_member font-20">
                <span class="mr-2 dog_price_laika_member_4412 font-weight-bold">${{ new Intl.NumberFormat('es-CO').format(productCard.price_member) }}</span>
              </span>
              <span class="btn_container_laika_member">
                <img width="80" class="ml-1 mb-1 lazy" style="align-self: stretch;" src="https://laika.com.co/assets/laikamemeber.svg">
                <button @click="open_popup_laikamember()" class="font-12 btn_member btn_laika_member_cards">ADQUIÉRELA YA</button>
              </span>
            </span>
          </span>
          <span id="txt_out_of_stock_dog_4412">
            <span class="txt_out_of_stock" id="out_of_stock_supplier"> </span>
          </span>
        </p>
        <div class="custom-radio-button pl-1 pt-2 custom-radio-button-scroll">
          <div v-for="(detail) in productCard.details" :key="detail.id">
            <input type="radio" :value="detail.name" :name="detail.name" :id="detail.id" required>
            <span class="text_quantity_product text_overflow_1_line" :title="detail.name">
              <label :for="detail.selected" @click="change_button_stock(detail.id, product.id)" :class="[detail.selected ? 'bg_purple text-white' : '']">
                {{ detail.name }}
              </label>
            </span>
          </div>
        </div>
      </div>
      <div class="card-footer p-0 mt-1 bg_purple rounded-lg">
        <div>
          <button
            type="submit"
            id="btn_general_universe_offers_dog_4412"
            class="btn btn-lg btn-block info_bubble text-white"
            @click="$emit('add_cart', productCard)"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Product',
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        productCard: this.product,
      }
    },
    methods: {
      change_button_stock(id, productId) {
        this.$emit('change_button_stock', {detailId: id, productId: productId })
      }
    }
  }
</script>

<style scoped>
  .box_products {
    padding: 40px 15px;
  }
</style>