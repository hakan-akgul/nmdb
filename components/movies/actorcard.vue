<template>
  <div class="flex items-center w-48 h-12 m-2 bg-gray-600 rounded-full shadow md:w-64 md:h-24" :class="{'justify-center':!image}">
    <img v-if="image" class="object-cover object-center w-12 h-12 rounded-full md:w-24 md:h-24" :src="'https://image.tmdb.org/t/p/w185' + image">
    <p class="ml-4 text-gray-900">
      {{ name }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>
