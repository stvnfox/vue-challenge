<script setup lang="ts">
const type = inject('type')

const { items } = useUniverse(type)
</script>

<template>
  <div class="">
    <pre>{{ items }}</pre>
  </div>
</template>
