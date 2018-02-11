<template>
  <div id="app">
    <br>
    <h1 class="text-center">Super Quiz</h1>
    <hr>
    <br><br>
    <app-super-quiz></app-super-quiz>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
      AppSuperQuiz: () => import('./components/SuperQuiz.vue'),
    },
  }
</script>

<style>

</style>
