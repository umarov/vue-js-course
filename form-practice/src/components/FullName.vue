<template>
  <div>
    <label for="firstName">Full Name</label>

    <input type="text" class="form-control" id="firstName" placeholder="First Name" @input="inputChanged" v-model="firstName">
    <input type="text" class="form-control" id="lastName" placeholder="Last Name" @input="inputChanged" v-model="lastName">
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: ''
    }
  },
  computed: {
    computedFullName() {
      return `${this.firstName} ${this.lastName}`
    }
  },
  props: ['value'],
  methods: {
    inputChanged() {
      this.$emit('input', this.computedFullName)
    }
  }
}
</script>

<style>

</style>
