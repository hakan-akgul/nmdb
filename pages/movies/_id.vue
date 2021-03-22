<template>
  <div class="relative">
    <div class="absolute z-10 w-screen h-screen bg-gradient-to-t to-transparent via-gray-900 from-gray-900" />
    <div class="absolute z-0 w-screen h-screen bg-center bg-no-repeat bg-cover" :style="{ backgroundImage: 'url( https://image.tmdb.org/t/p/w1280/' + details.backdrop_path + ')', }" />
    <div class="absolute w-screen h-screen opacity-90 bg-gradient-to-t to-indigo-600 from-transparent" />

    <div class="w-screen min-h-screen p-12 transition-transform duration-300">
      <div class="container relative z-10 grid grid-cols-1 text-white bg-cover md:grid-cols-2 place-items-center place-content-center">
        <div class="m-2 text-center md:text-right">
          <p class="text-6xl font-bold text-pink-600 ">
            {{ details.original_title }}
          </p>
          <p class="mb-8 font-bold text-purple-100">
            {{ details.tagline }}
          </p>
          <p class="text-indigo-100 ">
            {{ details.overview }}
          </p>
        </div>
        <div class="w-64 m-4 bg-center bg-no-repeat bg-cover border-4 border-pink-600 rounded-md shadow-lg h-96 lg:w-96 lg:h-128" :style="{ backgroundImage: 'url( https://image.tmdb.org/t/p/w300/' + details.poster_path + ')', }" />
      </div>

      <div class="container relative z-10 flex justify-center mb-8 text-white md:justify-start">
        <button class="px-4 py-1 border-b border-white hover:border-pink-600" :class="{'border-pink-600':activeTab==='info'}" @click="activeTab='info'">
          info
        </button>
        <button class="px-4 py-1 border-b border-white hover:border-pink-600" :class="{'border-pink-600':activeTab==='credits'}" @click="activeTab='credits'">
          credits
        </button>
        <button class="px-4 py-1 border-b border-white hover:border-pink-600" :class="{'border-pink-600':activeTab==='review'}" @click="activeTab='review'">
          review
        </button>
      </div>

      <div class="relative overflow-auto text-white h-160">
        <transition mode="in-out" name="fade">
          <div v-if="activeTab==='info'" class="container relative z-10 ">
            <movies-info :details="details" />
          </div>
        </transition>
        <transition mode="in-out" name="fade">
          <div v-if="activeTab==='credits'" class="container relative z-10 ">
            <movies-cast :credits="credits" />
          </div>
        </transition>
        <transition mode="in-out" name="fade">
          <div v-if="activeTab==='review'" class="container relative z-10 ">
            <movies-review :reviews="reviews" />
          </div>
        </transition>
      </div>
    </div>
    <div />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      activeTab: 'info'
    }
  },
  computed: {
    ...mapState([
      'details', 'reviews', 'credits'
    ])
  },
  created () {
    this.getDetails({ uri: this.$route.params.id, whereToSave: 'details' })
    this.getDetails({ uri: this.$route.params.id + '/credits', whereToSave: 'credits' })
    this.getDetails({ uri: this.$route.params.id + '/reviews', whereToSave: 'reviews' })
  },
  methods: {
    ...mapActions([
      'getDetails'
    ])
  }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
