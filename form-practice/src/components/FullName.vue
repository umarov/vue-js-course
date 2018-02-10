<template>
  <div>
    <label for="firstName">Full Name</label>

    <input type="text" class="form-control" id="firstName" ref="firstName" placeholder="First Name" @input="inputChanged" :value="firstName">
    <input type="text" class="form-control" id="lastName" ref="lastName" placeholder="Last Name" @input="inputChanged" :value="lastName">
  </div>
</template>

<script>
  export default {
    computed: {
      firstName() {
        return this.value.split(' ')[0] || ''
      },
      lastName() {
        return this.value.split(' ')[1] || ''
      },
    },
    props: ['value'],
    methods: {
      inputChanged() {
        this.$emit('input', `${this.$refs.firstName.value} ${this.$refs.lastName.value}`)
      },
    },
  }
</script>

<style>

</style>
