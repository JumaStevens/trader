export default {
  OPEN_NAV_MENU (state) {
    state.isNavMenuOpen = true
  },


  CLOSE_NAV_MENU (state) {
    state.isNavMenuOpen = false
  },


  TOGGLE_NAV_MENU (state) {
    state.isNavMenuOpen = !state.isNavMenuOpen
  },


  SET_IS_BROWSER (state) {
    state.isBrowser = true
  },


  SET_ACTIVE_PRODUCT_ID (state, { productId }) {
    console.log('set: ', productId)
    state.activeProductId = productId
  }
}
