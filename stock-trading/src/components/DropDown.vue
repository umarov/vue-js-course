<template>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" :aria-expanded="showDropDown" @click="dropDown = !dropDown">
      {{dropDownName}}
    </a>
    <div class="dropdown-menu dropdown-items" :class="showDropDown" aria-labelledby="navbarDropdown">
      <slot></slot>
    </div>
  </li>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    props: {
      dropDownName: String,
      hideDropDown: Boolean,
    },
    data() {
      return {
        dropDown: false,
      };
    },
    watch: {
      hideDropDown(value: boolean, oldValue: boolean) {
        if (value && value !== oldValue) {
          this.dropDown = !value;
        }
      },
    },
    computed: {
      showDropDown(): object {
        return {
          show: !this.hideDropDown && this.dropDown,
        };
      },
    },
  });
</script>

<style lang="scss" scoped>
  .dropdown-items.dropdown-menu.show {
    transform: translate3d(-130px, 0px, 0px);
  }
</style>

