<template>
  <div>
    <NavbarContact />
    <Navbar />

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
  import Navbar from '../components/header/Navbar.vue'
  import NavbarContact from '../components/header/NavbarContact.vue'

  export default {
    name: 'Home',
    components: {
      Navbar,
      NavbarContact
    },
  }
</script>
