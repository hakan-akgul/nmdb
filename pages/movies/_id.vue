<template>
  <div class="relative">
    <nuxt-link to="/" class="absolute z-30 text-white transition duration-300 top-16 left-10 hover:text-pink-400">
      <ClientOnly>
        <eva-icon
          name="arrow-back"
          width="30px"
          height="30px"
          size="2x"
          class="fill-current"
        />
      </ClientOnly>
    </nuxt-link>

    <div class="absolute z-10 w-screen h-screen bg-gradient-to-t to-transparent via-gray-900 from-gray-900" />
    <div class="absolute z-0 w-screen h-screen bg-center bg-no-repeat bg-cover" :style="{ backgroundImage: 'url( https://image.tmdb.org/t/p/w1280/' + details.backdrop_path + ')', }" />
    <div class="absolute w-screen h-screen opacity-90 bg-gradient-to-t to-indigo-600 from-transparent" />

    <div class="w-screen min-h-screen p-12 transition-transform duration-300">
      <div class="container relative z-10 grid grid-cols-1 text-white bg-cover md:grid-cols-2 place-items-center place-content-center">
        <div class="m-2 text-center md:text-right">
          <p class="text-6xl font-bold text-pink-600 ">
            {{ details.original_title }}
          </p>
          <p class="mb-8 font-bold text-gray-200">
            {{ details.tagline }}
          </p>
          <p class="">
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

      <div class="relative overflow-auto h-160">
        <transition mode="in-out" name="fade">
          <div v-if="activeTab==='info'" class="container relative z-10 text-white">
            <movies-info :details="details" />
          </div>
        </transition>
        <transition mode="in-out" name="fade">
          <div v-if="activeTab==='credits'" class="container relative z-10 text-white">
            <movies-cast :credits="credits" />
          </div>
        </transition>
        <transition mode="in-out" name="fade">
          <div v-if="activeTab==='review'" class="container relative z-10 text-white">
            <movies-review :reviews="reviews" />
          </div>
        </transition>
      </div>
    </div>
    <div />
  </div>
</template>

<script>

export default {
  data () {
    return {
      details: {},
      credits: {},
      reviews: {},
      activeTab: 'info'
    }
  },
  created () {
    this.getData(this.$route.params.id, '')
    this.getData(this.$route.params.id + '/credits', 'credits')
    this.getData(this.$route.params.id + '/reviews', 'reviews')
  },
  methods: {
    async getData (uri, whereToSave) {
      const data = await this.$axios.$get(`/movie/${uri}`, {
        params: {
          api_key: '87177b3b4633191717e245a03297cd7f',
          language: 'en-US'
        }
      })
      if (whereToSave === '') {
        this.details = data
      } else if (whereToSave === 'credits') {
        this.credits = data
      } else if (whereToSave === 'reviews') {
        this.reviews = data
      };
    }
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
