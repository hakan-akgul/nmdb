<template>
  <NuxtLink :to="'movies/'+id">
    <div class="relative flex flex-col items-center w-48 h-72 group" @mouseover="toggleInfo=true" @mouseleave="toggleInfo=false">
      <div class="relative z-10 w-48 h-64 mx-4 transition-colors duration-300 bg-center bg-cover rounded-t-md" :style="{ backgroundImage: 'url( https://image.tmdb.org/t/p/w300/' + poster + ')', }">
        <div class="absolute flex items-center justify-center w-6 h-6 bg-gray-900 border-2 border-pink-600 rounded-full top-2 left-2 ">
          <p class="text-xs text-white" v-text="rate" />
        </div>

        <transition name="fade">
          <div v-if="toggleInfo">
            <div class="relative z-20 w-full h-full p-2" />
            <div class="absolute inset-0 z-10 bg-pink-900 opacity-50 rounded-t-md" />
          </div>
        </transition>
      </div>

      <div class="flex items-center content-center w-full p-2 mb-4 transition-colors duration-300 bg-gray-800 group-hover:bg-pink-800 rounded-b-md">
        <p class="text-xs font-bold text-center text-gray-100" v-text="title" />
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    poster: { type: String, default: '' },
    rate: { type: Number, default: 0 },
    id: { type: Number, default: 0 },
    genres: { type: Array, default: null }
  },
  data () {
    return { toggleInfo: false }
  }
}
</script>
