<template>
  <div class="container">
    <app-header class="row"></app-header>
    <hr>
    <app-servers class="row"></app-servers>
    <hr>
    <app-footer class="row"></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Servers from './components/Servers.vue'

  export default {
    name: 'app',
    components: {
      'app-servers': Servers,
      'app-header': Header,
      'app-footer': Footer
    }
  }
</script>

<style>

</style>
