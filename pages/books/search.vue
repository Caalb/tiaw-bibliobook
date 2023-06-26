<template>
	<v-container>
		<v-row justify="center">
			<v-col
				cols="9"
				md="6"
				lg="4"
			>
				<v-text-field
					v-model="book_data"
					label="Buscar Livros"
					outlined
					append-icon="mdi-magnify"
					color="white"
				></v-text-field>
			</v-col>

			<v-col
				cols="3"
				md="2"
			>
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
			<template v-if="! request_pending">
				<v-col
					v-for="book in getBooksResults"
					:key="book.id"
					cols="12"
					sm="6"
					md="4"
					lg="3"
				>
					<BBCard :book="book"/>
				</v-col>

				<v-col v-if="getEmptyResult">
					<p class="text-center mr-4 mt-5">
						{{ getMessage }}
					</p>
				</v-col>
			</template>

			<v-col
				v-if="request_pending"
				class="d-flex justify-center mt-5"
			>
				<v-progress-circular
					:size="50"
					:width="7"
					:color="$vuetify.theme.isDark ? 'success' : 'primary'"
					indeterminate
				></v-progress-circular>
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
  head() {
    return {
      title: 'BB | Buscar livros',
    };
  },

  data: () => ({
    book_data: '',
    request_pending: false,
  }),

  computed: {
    ...mapState('book', {
      getBooks: 'books',
    }),

    getBooksResults() {
      const { items = []} = this.getBooks;

      return items;
    },

    getEmptyResult() {
      return this.getBooksResults.length === 0;
    },

    getMessage() {
      const { query: q } = this.$route;

      if (Object.keys(q).length === 0) {
        return 'Busque seu próximo livro agora!';
      }

      return 'Livro não encontrado.';
    },
  },

  mounted() {
    const { query } = this.$route;
    const { q: book_data} = query;

    if (Object.keys(query).length > 0 && book_data) {
      this.book_data = decodeURIComponent(book_data);
      this.request_pending = true;

      this.fetchBooks({ book_data });

      this.request_pending = false;
    }
  },

  methods: {
    ...mapActions({ fetchBooks: 'book/fetchBooks'}),
    async searchBooks() {
      const encodedQuery = encodeURIComponent(this.book_data);

      this.$router.push({ name: 'books-search', query: { q: encodedQuery } });

      if (this.book_data) {
        this.request_pending = true;
        await this.fetchBooks({ book_data: this.book_data });
        this.request_pending = false;
      }
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