export default {
  changeCity (state, city) {
    // console.log(state)
    // console.log(city)
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
