/* eslint-disable no-console */
const actions = {

  /* ------------------------------- GETDETAILS ------------------------------- */

  async getDetails ({ commit }, payload) {
    const whereToSave = payload.whereToSave
    await this.$axios
      .$get(`/movie/${payload.uri}`, {
        params: this.state.params
      })
      .then((response) => {
        commit('SET_MOVIE_INFOS', { response, whereToSave })
      })
      .catch((error) => {
        console.log(error.response)
      })
  },

  /* -------------------------------- GETMOVIES ------------------------------- */

  async getMovies ({ commit }, payload) {
    await this.$axios
      .$get('/discover/movie', {
        params: {
          api_key: '87177b3b4633191717e245a03297cd7f',
          language: 'en-US',
          page: payload.page,
          with_genres: payload.withGenres
        }
      })
      .then((response) => {
        commit('SET_ACTIVE_GENRE', payload.withGenres)
        commit('SET_MOVIES', response.results)
        commit('SET_PAGE', payload.page)
      })
      .catch((error) => {
        console.log(error.response)
      })
  },

  /* -------------------------------- GETGENRES ------------------------------- */

  async getGenres ({ commit }) {
    await this.$axios
      .$get('/genre/movie/list', {
        params: this.state.params
      })
      .then((response) => {
        commit('SET_GENRES', response.genres)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }
}
export default actions
