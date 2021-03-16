/* ---------------------------------- STATE --------------------------------- */

export const state = () => ({
  page: 1,
  activeGenre: null,
  toggleSidebar: false

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
  SET_ACTIVE_GENRE (state, activeGenre) {
    state.activeGenre = activeGenre
  },
  TOGGLE_SIDEBAR (state) {
    state.toggleSidebar = !state.toggleSidebar
  }
}
