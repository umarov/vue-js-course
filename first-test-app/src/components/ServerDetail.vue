<template>
  <div>
    <template v-if="server">
      Details for Server {{server.id}}
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
