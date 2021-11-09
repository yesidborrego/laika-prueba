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
  import Navbar from './header/Navbar.vue'
  import NavbarContact from './header/NavbarContact.vue'
  import MainContent from './main/MainContent.vue'

  export default {
    name: 'Home',
    components: {
    Navbar,
    NavbarContact,
    MainContent
},
  }
</script>
