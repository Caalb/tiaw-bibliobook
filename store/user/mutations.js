export default {
  setUser(state, payload) {
    localStorage.setItem('user', payload);
    state.user_name = payload;
  },

  setAuthentication(state, flag) {
    localStorage.setItem('auth', flag);
    state.auth = flag;
  },
};