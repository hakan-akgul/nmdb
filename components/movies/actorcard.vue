<template>
  <div class="flex items-center w-64 h-24 m-2 bg-gray-600 rounded-full shadow" :class="{'justify-center':!image}">
    <img v-if="image" class="object-cover object-center w-24 h-24 rounded-full" :src="'https://image.tmdb.org/t/p/w185' + image">
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
