export default {
  async fetchBooks({ commit }, { book_data }) {
    const response = await this.$api.$get(`/volumes?q=${book_data}`);

    commit('setBooks', response);
  },
};