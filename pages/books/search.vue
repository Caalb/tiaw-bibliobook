<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="9" md="6" lg="4">
				<v-text-field
					v-model="book_data"
					label="Buscar Livros"
					outlined
					append-icon="mdi-magnify"
					color="white"
				></v-text-field>
			</v-col>

			<v-col cols="3" md="2">
				<v-btn
					:color="$vuetify.theme.isDark ? 'success' : 'primary'"
					height="56"
					elevation="2"
					text
					@click="searchBooks"
				>
					Buscar
				</v-btn>
			</v-col>
		</v-row>

		<v-row>
			<v-col v-for="book in getBooksResults" :key="book.id" cols="12" sm="6" md="4" lg="3">
				<BBCard :book="book"/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import BBCard from './../../components/partials/BBCard.vue';
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  name: 'BBBooks',
  components: { BBCard },
  data: () => ({ book_data: ''}),

  computed: {
    ...mapState('book', {
      getBooks: 'books',
    }),

    getBooksResults() {
      const { items = []} = this.getBooks;

      return items;
    },
  },

  mounted() {
    const { query} = this.$route;
    const { q: book_data} = query;

    if (Object.keys(query).length > 0 && book_data) {
      this.book_data = book_data;
      this.fetchBooks({ book_data });
    }
  },

  methods: {
    ...mapActions({ fetchBooks: 'book/fetchBooks'}),
    async searchBooks() {
      const encodedQuery = encodeURIComponent(this.book_data);

      this.$router.push({ name: 'books-search', query: { q: encodedQuery } });

      await this.fetchBooks({ book_data: this.book_data });
    },
  },
};

</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
</style>