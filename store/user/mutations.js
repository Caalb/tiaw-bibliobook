export default {
  setUser (state, payload) {
    state.user_name = payload;
  },

  setAuthentication (state, flag) {
    localStorage.setItem('auth', flag);
    state.auth = flag;
  },
};