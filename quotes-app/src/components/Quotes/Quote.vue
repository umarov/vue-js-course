<template>
  <div class="quote">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quote: Object,
  },
};
</script>

<style scoped>
  .card:hover {
    background-color: #ffe5e5;
  }

  .quote {
    padding: 8px;
    cursor: pointer;
  }

  .card-text {
    font-family: 'Arizonia', cursive;
    text-align: center;
    font-size: 2em;
  }
</style>
