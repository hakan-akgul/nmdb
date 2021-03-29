const mutations = {

  /* ---------------------------------- PAGE ---------------------------------- */

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

  /* ---------------------------------- GENRE --------------------------------- */

  SET_ACTIVE_GENRE (state, activeGenre) {
    state.activeGenre = activeGenre
  },
  SET_GENRES (state, payload) {
    state.genres = payload
  },

  /* ---------------------------------- MOVIE --------------------------------- */

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

  /* --------------------------------- SIDEBAR -------------------------------- */

  TOGGLE_SIDEBAR (state) {
    state.toggleSidebar = !state.toggleSidebar
  },
  CLOSE_SIDEBAR (state) {
    state.toggleSidebar = false
  }
}
export default mutations
