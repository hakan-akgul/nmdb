<template>
  <div class="min-h-screen overflow-hidden bg-gray-900">
    <div class="">
      <navbar />
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
</script>
