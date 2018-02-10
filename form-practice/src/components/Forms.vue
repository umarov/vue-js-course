<template>
  <main>
    <h1>Form Practice</h1>
    <div class="container-fluid">
      <div class="card">
        <div class="card-body">
          <form @submit.prevent="userDetailsSubmitted">
            <div class="form-group">
              <app-full-name v-model="user.fullName" />
              <!-- <input type="text" class="form-control" id="fullnameInput" aria-describedby="fullnamehelp" placeholder="Enter your full name" v-model="user.fullName"> -->
            </div>
            <div class="form-group">
              <label for="emailInput">Email</label>
              <input type="email" class="form-control" id="emailInput" placeholder="Email" v-model="user.email">
            </div>
            <div class="form-group">
              <label for="passwordInput">Password</label>
              <input type="password" class="form-control" id="passwordInput" placeholder="Password" v-model="user.password">
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="storeDataCheckbox" v-model="user.storeData">
              <label class="form-check-label" for="storeDataCheckbox">Store data?</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>

    </div>
    <hr>
    <div class="container-fluid" v-if="submitted">
      <div class="card">
        <div class="card-header">
          Form Results
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="(value, key, index) in user" :key="index">{{key}}: {{value}}</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
  import FullName from './FullName.vue';

  export default {
    components: {
      AppFullName: FullName
    },
    data() {
      return {
        user: {
          fullName: '',
          email: '',
          password: '',
          storeData: false,
        },
        submitted: false
      }
    },
    methods: {
      userDetailsSubmitted() {
        this.submitted = true
      }
    }
  }
</script>

<style>

</style>
