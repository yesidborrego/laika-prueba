<template>
  <div>
    <NavbarContact />
    <Navbar />

    <main>
      <MainContent />
    </main>
  </div>
</template>

<script>
  import Navbar from '../js/components/header/Navbar.vue'
  import NavbarContact from '../js/components/header/NavbarContact.vue'
  import MainContent from '../js/components/main/MainContent.vue'

  export default {
    name: 'Home',
    components: {
    Navbar,
    NavbarContact,
    MainContent
},
  }
</script>
