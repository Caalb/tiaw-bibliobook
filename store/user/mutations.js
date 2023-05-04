export default {
  setUser (state, payload) {
    state.user_name = payload;
  },

  setAuthentication (state, flag) {
    state.auth = flag;
  },
};