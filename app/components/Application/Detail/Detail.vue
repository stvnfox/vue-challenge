<script setup lang="ts">
const props = defineProps<{
  status: string
  to: string
}>()
</script>

<template>
  <section class="my-8 px-3">
    <ApplicationLoading v-if="props.status === 'pending'" />
    <ApplicationError
      v-else-if="props.status === 'error'"
      title="Oops.. Something went wrong"
      message="Sorry, we couldn't fetch the data. Please try again later."
      :to="props.to"
    />
    <div v-else>
      <slot />
    </div>
  </section>
</template>
