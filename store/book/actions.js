export default {
  async fetchBooks({ commit }, { book_data }) {
    const response = await this.$axios.$get(`https://www.googleapis.com/books/v1/volumes?q=${book_data}`);

    commit('setBooks', response);
  },
};