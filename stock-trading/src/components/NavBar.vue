<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand" router-link-active="active" @click.stop="showNavBar = false">Stock Trader</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="showNavBar = !showNavBar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" :class="{ show: !hideDropDown && showNavBar }" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto" @click.stop="showNavBar = false">
        <router-link to="/portfolio" class="nav-item" tag="li" router-link-active="active">
          <a href="#" class="nav-link">Portfolio</a>
        </router-link>

        <router-link to="/stocks" class="nav-item" tag="li" router-link-active="active">
          <a href="#" class="nav-link">Stocks</a>
        </router-link>

      </ul>
      <ul class="navbar-nav">
        <li class="nav-item" @click.stop="showNavBar = false">
          <a class="nav-link" href="#">End Day</a>
        </li>
        <st-drop-down drop-down-name="Save & Load" :hide-drop-down="hideDropDown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </st-drop-down>
        <span class="navbar-text font-weight-bold">
          Funds: {{funds | currency}}
        </span>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapGetters } from 'vuex';

  import DropDown from '@/components/DropDown.vue';

  export default Vue.extend({
    props: { hideDropDown: Boolean },
    components: {
      StDropDown: DropDown,
    },
    computed: {
      ...mapGetters({
        funds: 'getFunds',
      }),
    },
    data() {
      return {
        showNavBar: false,
      };
    },
  });
</script>

<style lang="scss" scoped>
  nav {
    z-index: 100;
  }
</style>
