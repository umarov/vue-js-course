<template>
  <div>
    <app-server-list :servers="servers" @serverSelected="selectedServer = $event" class="col-xs-12 col-sm-6"></app-server-list>
    <app-server-detail class="col-xs-12 col-sm-6" :server="selectedServer"></app-server-detail>
  </div>
</template>

<script>
import ServerList from './ServerList.vue';
import ServerDetail from './ServerDetail.vue';

export default {
  components: {
    'app-server-list': ServerList,
    'app-server-detail': ServerDetail
  },
  data() {
    return {
      servers: [
        { id: 1, status: 'Critical' },
        { id: 2, status: 'Normal' },
        { id: 3, status: 'Lit' },
        { id: 4, status: 'Dead' },
        { id: 5, status: 'Healthy' }
      ],
      selectedServer: undefined
    };
  }
};
</script>
