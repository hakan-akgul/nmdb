<template>
  <div class="flex flex-col items-center w-screen p-8 ">
    <h1 class="text-4xl font-bold text-center text-pink-600 md:text-6xl">
      DISCOVER
    </h1>

    <div class="flex w-full ">
      <aside class="z-20 flex-col items-start self-start hidden p-2 bg-gray-900 sm:flex sm:w-1/6">
        <button
          class="text-white transition-colors duration-300 hover:text-pink-600"
          :class="{'text-pink-600':activeGenre===null }"
          @click="$store.commit('SET_ACTIVE_GENRE',null),$store.commit('RESET_PAGE')"
        >
          All Genres
        </button>
        <button
          v-for="genre in genres"
          :key="genre.id"
          class="text-white transition-colors duration-300 hover:text-pink-600"
          :class="{'text-pink-600':genre.id===activeGenre }"
          @click="$store.commit('SET_ACTIVE_GENRE',genre.id),$store.commit('RESET_PAGE')"
        >
          {{ genre.name }}
        </button>
      </aside>
      <div class="grid w-full grid-cols-1 sm:w-5/6 place-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <div v-for="movie in movies" :key="movie.id">
          <moviecard
            :id="movie.id"
            :title="movie.original_title"
            :poster="movie.poster_path"
            :rate="movie.vote_average"
            :genres="movie.genre_ids"
          />
        </div>
      </div>
    </div>
    <div class="flex items-center my-12">
      <button
        class="w-12 h-6 transition duration-300 bg-pink-600 rounded-l-full hover:bg-indigo-600"
        @click="$store.commit('PREV_PAGE')"
      >
        <ClientOnly>
          <eva-icon name="arrow-back" fill="white" />
        </ClientOnly>
      </button>
      <p class="px-4 text-white bg-pink-600 font bold">
        {{ page }}
      </p>
      <button
        class="w-12 h-6 transition duration-300 bg-pink-600 rounded-r-full hover:bg-indigo-600"
        @click="$store.commit('NEXT_PAGE')"
      >
        <ClientOnly>
          <eva-icon name="arrow-forward" fill="white" />
        </ClientOnly>
      </button>
    </div>

    <!-- sidebar for mobile-->
    <transition name="fade">
      <div v-if="toggleSidebar" class="absolute left-0 z-20 flex flex-col items-start self-start w-64 min-h-screen p-2 bg-gray-800 top-10">
        <button
          class="text-white transition-colors duration-300 hover:text-pink-600"
          :class="{'text-pink-600':activeGenre===null }"
          @click="$store.commit('SET_ACTIVE_GENRE',null),$store.commit('RESET_PAGE'),$store.commit('TOGGLE_SIDEBAR')"
        >
          All Genres
        </button>
        <button
          v-for="genre in genres"
          :key="genre.id"
          class="text-white transition-colors duration-300 hover:text-pink-600"
          :class="{'text-pink-600':genre.id===activeGenre }"
          @click="$store.commit('SET_ACTIVE_GENRE',genre.id),$store.commit('RESET_PAGE'),$store.commit('TOGGLE_SIDEBAR')"
        >
          {{ genre.name }}
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'movies',
      'genres',
      'page',
      'activeGenre',
      'toggleSidebar'
    ])
  },

  watch: {
    page () {
      this.getMovies({ page: this.page, withGenres: this.activeGenre })
    },
    activeGenre () {
      this.getMovies({ page: this.page, withGenres: this.activeGenre })
    }
  },

  created () {
    this.getMovies({ page: this.page, withGenres: this.activeGenre })
    this.getGenres()
  },

  methods: {
    ...mapActions([
      'getMovies', 'getGenres'
    ]),
    // for identify active genre on sidebar
    checkGenres (id) {
      if (id === this.$route.params.with_genres) {
        return id
      }
    }
  }
}
</script>
