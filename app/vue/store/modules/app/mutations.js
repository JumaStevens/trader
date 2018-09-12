export default {
  OPEN_NAV_MENU (state) {
    state.navMenuActive = true
  },


  CLOSE_NAV_MENU (state) {
    state.navMenuActive = false
  },


  TOGGLE_NAV_MENU (state) {
    state.navMenuActive ? state.navMenuActive = false : state.navMenuActive = true
  }
}
