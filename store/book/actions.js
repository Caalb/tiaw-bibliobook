export default {
  async fetchBooks({ commit }) {
    const response = await this.$axios.$get('https://www.googleapis.com/books/v1/volumes?q=harry+potter');

    commit('setBooks', response);
  },
};