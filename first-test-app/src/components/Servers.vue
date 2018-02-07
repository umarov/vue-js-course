<template>
  <div>
    <app-server-list :servers="servers" class="col-xs-12 col-sm-6"></app-server-list>
    <app-server-detail class="col-xs-12 col-sm-6" :server="selectedServer"></app-server-detail>
  </div>
</template>

<script>
import ServerList from './ServerList.vue'
import ServerDetail from './ServerDetail.vue'

export default {
  components: {
    'app-server-list': ServerList,
    'app-server-detail': ServerDetail
  },
  data() {
    return {
      servers: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      selectedServer: undefined
    }
  }
}
</script>
