<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<h1 class="text-center my-5">Meus livros favoritos</h1>
			</v-col>
		</v-row>

		<v-row justify="center" class="my-5">
			<v-col cols="12" sm="6" md="5" lg="4">
				<v-text-field
					v-model="search_input"
					label="Nome"
					multiple
					clearable
					:color="getColorInput"
					@change="searchBook"
				></v-text-field>
			</v-col>
		</v-row>

		<v-row>
			<v-col
				v-for="book in favorites_book"
				:key="book.id"
				cols="12"
				sm="6"
				md="4"
				lg="3"
			>
				<BBMyBooksCard :book="book"/>
			</v-col>

			<v-col
				v-if="getRenderEmptyMessage"
				class="text-center mt-5"
			>
				{{ getEmptyMessage }}
			</v-col>
		</v-row>
	</v-container>

</template>

<script>
import BBMyBooksCard from '../../components/partials/BBMyBooksCard.vue';

import { getFavoritesBooks } from '../../helpers/getFavoritesBooks';

export default {
  name: 'BBBooks',
  components: { BBMyBooksCard},
  head() {
    return {
      title: 'BB | Meus favoritos',
    };
  },

  data() {
    return {
      search_input: '',
      favorites_book: [],
    };
  },

  computed: {
    getColorInput() {
      return this.$vuetify.theme.isDark ? 'white' : 'dark';
    },

    getEmptyMessage() {
      const not_found = 'Nenhum livro correspondente foi encontrado.';
      const dont_have_favorites_books = 'Você não possui nenhum livro favorito no momento. Para adicionar livros aos favoritos, faça uma busca e clique no ícone de coração.';

      return getFavoritesBooks().length ? not_found : dont_have_favorites_books;
    },

    getRenderEmptyMessage() {
      return this.favorites_book.length === 0;
    },
  },

  mounted() {
    this.favorites_book = getFavoritesBooks();
  },

  watch: {
    search_input(value) {
      if (value) {
        return this.searchBook();
      }


      this.favorites_book = getFavoritesBooks();
    },
  },

  methods: {
    searchBook() {
      const filtred_books = getFavoritesBooks().filter((book) => {
        const { volumeInfo: { title } = {} } = book;

        return title.toLowerCase().includes(this.search_input.toLowerCase());
      });


      this.favorites_book = filtred_books;
    },
  },
};
</script>