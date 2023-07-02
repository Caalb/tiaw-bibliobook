export default {
  async fetchBooks({ commit }, { book_data, free_books, start_index = 0 }) {
    const params = new URLSearchParams({
      q: book_data,
      startIndex: start_index,
      maxResults: 10,
    });

    if (free_books) {
      params.append('filter', 'free-ebooks');
    }

    const response = await this.$api.$get('/volumes', { params });

    commit('setBooks', response);
  },
};