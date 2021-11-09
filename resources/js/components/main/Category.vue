<template>
  <div class="py-4 card_categories_home px-3 pt-2 pb-2 text-center cursor_pointer" @click="$emit('redirect_filters')">
    <div class="pb-2">
      <img class="box_categories_v2 text-center mx-auto d-block lazy" :src="category.image">
    </div>
    <h3 class="font-17">{{ category.name }}</h3>
  </div>
</template>

<script>
  export default {
    name: 'Category',
    props: {
      category: {
        type: Object,
        required: true
      }
    }
  }
</script>
