<template>
  <div id="app" @click="hideDropDown = true">
    <st-nav-bar :hideDropDown="hideDropDown" @click.native.stop="hideDropDown = false"></st-nav-bar>
    <div id="nav container">
      <transition mode="out-in" :duration="100" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NavBar from '@/components/NavBar.vue';
  export default Vue.extend({
    components: {
      StNavBar: NavBar,
    },
    data() {
      return {
        hideDropDown: false,
      };
    },
  });
</script>


<style>

</style>
