/* ---------------------------------- STATE --------------------------------- */

export const state = () => ({
  params: {
    api_key: '87177b3b4633191717e245a03297cd7f',
    language: 'en-US'
  },
  page: 1,
  activeGenre: null,
  toggleSidebar: false,
  movies: '',
  genres: '',
  details: '',
  reviews: '',
  credits: ''
})

/* -------------------------------- MUTATIONS ------------------------------- */

export const mutations = {
  NEXT_PAGE (state) {
    state.page++
  },
  PREV_PAGE (state) {
    state.page--
  },
  RESET_PAGE (state) {
    state.page = 1
  },
  SET_PAGE (state, page) {
    state.page = page
  },
  SET_ACTIVE_GENRE (state, activeGenre) {
    state.activeGenre = activeGenre
  },
  TOGGLE_SIDEBAR (state) {
    state.toggleSidebar = !state.toggleSidebar
  },
  SET_MOVIE_INFOS (state, payload) {
    if (payload.whereToSave === 'details') {
      state.details = payload.response
    } else if (payload.whereToSave === 'credits') {
      state.credits = payload.response
    } else if (payload.whereToSave === 'reviews') {
      state.reviews = payload.response
    }
  },
  SET_MOVIES (state, payload) {
    state.movies = payload
  },
  SET_GENRES (state, payload) {
    state.genres = payload
  }
}

/* --------------------------------- ACTIONS -------------------------------- */

export const actions = {

  async getDetails ({ commit }, payload) {
    const whereToSave = payload.whereToSave
    const response = await this.$axios.$get(`/movie/${payload.uri}`, {
      params: this.state.params
    })
    commit('SET_MOVIE_INFOS', { response, whereToSave })
  },

  async getMovies ({ commit }, payload) {
    const response = await this.$axios
      .$get('/discover/movie', {
        params: {
          api_key: '87177b3b4633191717e245a03297cd7f',
          language: 'en-US',
          page: payload.page,
          with_genres: payload.withGenres
        }
      })
    commit('SET_ACTIVE_GENRE', payload.withGenres)
    commit('SET_MOVIES', response.results)
    commit('SET_PAGE', payload.page)
  },

  async getGenres ({ commit }) {
    const response = await this.$axios
      .$get('/genre/movie/list', {
        params: this.state.params
      })
    commit('SET_GENRES', response.genres)
  }
}
