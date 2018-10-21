export default {
  OPEN_NAV_MENU (state) {
    state.isNavMenuOpen = true
  },


  CLOSE_NAV_MENU (state) {
    state.isNavMenuOpen = false
  },


  TOGGLE_NAV_MENU (state) {
    state.isNavMenuOpen = !state.isNavMenuOpen
  }
}
