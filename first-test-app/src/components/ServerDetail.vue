<template>
  <div>
    <template v-if="server">
      <h1>{{server.id}}</h1>
      <p>{{server.status}}</p>

    </template>

    <template v-else>
      <p>Server Details are currently not updated</p>
    </template>
  </div>
</template>

<script>
export default {
  props: ['server']
}
</script>
