<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item" v-for="server in servers" :key="server.id" @click="selectServerForDetails(server)" @mouseover="selectServerForDetails(server)">
        <app-server-list-item :server="server"></app-server-list-item>
      </li>
    </ul>
  </div>
</template>

<script>
import ServerListItem from './ServerListItem.vue'

export default {
  props: ['servers'],
  components: {
    'app-server-list-item': ServerListItem
  },
  methods: {
    selectServerForDetails(server) {
      this.$emit('serverSelected', server)
    }
  }
}
</script>
