const actions = {

  /* ------------------------------- GETDETAILS ------------------------------- */

  async getDetails ({ commit }, payload) {
    const whereToSave = payload.whereToSave
    const response = await this.$axios.$get(`/movie/${payload.uri}`, {
      params: this.state.params
    })
    commit('SET_MOVIE_INFOS', { response, whereToSave })
  },

  /* -------------------------------- GETMOVIES ------------------------------- */

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

  /* -------------------------------- GETGENRES ------------------------------- */

  async getGenres ({ commit }) {
    const response = await this.$axios
      .$get('/genre/movie/list', {
        params: this.state.params
      })
    commit('SET_GENRES', response.genres)
  }
}
export default actions
