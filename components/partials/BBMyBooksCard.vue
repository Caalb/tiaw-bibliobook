<template>
	<v-card class="mx-auto" max-width="300" raised>
		<v-img :src="getBookImage" height="200px"></v-img>

		<v-card-title>{{ getBookTitle }}</v-card-title>

		<v-card-subtitle>{{ getBookAuthors }}</v-card-subtitle>

		<v-card-actions>
			<v-btn icon @click="setFavoriteBook">
				<v-icon color="error">{{ !favorite ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
			</v-btn>

			<v-rating v-model="getBookRating" half-increments color="warning"></v-rating>
		</v-card-actions>

		<v-card-actions>
			<v-dialog
				transition="dialog-top-transition"
				max-width="600"
			>
				<template #activator="{ on, attrs }">
					<v-btn
						color="orange lighten-2"
						text
						v-bind="attrs"
						v-on="on"
					>
						Detalhes
					</v-btn>
				</template>

				<template #default="dialog">
					<v-card>
						<v-toolbar
							color="primary"
							dark
						>
							{{ getBookTitle }}
						</v-toolbar>

						<v-card-text>
							<div>
								<p class="text--primary">
									{{ getBookDescription }}
								</p>
							</div>
						</v-card-text>

						<v-card-actions class="justify-end">
							<v-btn
								text
								@click="dialog.value = false"
							>
								Fechar
							</v-btn>
						</v-card-actions>
					</v-card>
				</template>
			</v-dialog>
		</v-card-actions>
	</v-card>
</template>

<script>
import { removeFavoriteBook } from '../../helpers/removeFavoriteBook';
import { setFavoriteBook } from '../../helpers/setFavoriteBook.js';

export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      favorite: false,
    };
  },

  computed: {
    getVolumeInfo() {
      const { volumeInfo = {} } = this.book;

      return volumeInfo;
    },

    getBookImage() {
      const { imageLinks: { thumbnail, small, medium, large } = {} } = this.getVolumeInfo;

      return large ??
			medium ??
			small ??
			thumbnail ??
			'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
    },

    getBookTitle() {
      const { title = '' } = this.getVolumeInfo;

      return title;
    },

    getBookDescription() {
      const { description = '' } = this.getVolumeInfo;

      return description;
    },

    getBookAuthors() {
      const { authors = []} = this.getVolumeInfo;

      return authors.join(', ');
    },

    getBookRating() {
      const { averageRating } = this.getVolumeInfo;

      return averageRating;
    },
  },

  methods: {
    setFavoriteBook() {
      setFavoriteBook({ book: this.book });

      if (this.favorite) {
        const { id: book_id } = this.book;

	      removeFavoriteBook({ book_id });
      }

      this.favorite = ! this.favorite;
    },
  },
};
</script>
