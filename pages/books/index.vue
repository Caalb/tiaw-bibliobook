<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<h1 class="text-center my-5">Meus livros favoritos</h1>
			</v-col>
		</v-row>

		<v-row justify="center" class="my-5">
			<v-col cols="12" sm="6" md="4" lg="3">
				<v-text-field
					label="Nome"
					multiple
					clearable
					:color="getColorInput"
				></v-text-field>
			</v-col>

			<v-col cols="12" sm="6" md="4" lg="3">
				<v-text-field
					label="Autor"
					multiple
					clearable
					:color="getColorInput"
				></v-text-field>
			</v-col>
		</v-row>

		<v-row>
			<v-col v-for="book in getFavoritesBooks" :key="book.id" cols="12" sm="6" md="4" lg="3">
				<BBMyBooksCard :book="book"/>
			</v-col>
		</v-row>
	</v-container>

</template>

<script>
import BBMyBooksCard from '../../components/partials/BBMyBooksCard.vue';

import { getFavoritesBooks } from '../../helpers/getFavoritesBooks';

export default {
  name: 'BBBooks',
  components: {
    BBMyBooksCard,
  },

  computed: {
    getColorInput() {
      return this.$vuetify.theme.isDark ? 'white' : 'dark';
    },

    getFavoritesBooks() {
      return getFavoritesBooks();
    },
  },
};
</script>