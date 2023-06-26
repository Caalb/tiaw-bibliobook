<template>
	<v-card
		class="mx-auto"
		max-width="250"
		raised
	>
		<v-img
			:src="getBookImage"
			cover
			height="375"
			:alt="getBookTitle"
		></v-img>

		<v-card-title>
			{{ getBookTitle }}
		</v-card-title>

		<v-card-subtitle>
			{{ getBookAuthors }}
		</v-card-subtitle>

		<v-card-actions>
			<v-btn icon @click="setFavoriteBook">
				<v-icon color="error">
					{{ favorite ? 'mdi-heart' : 'mdi-heart-outline' }}
				</v-icon>
			</v-btn>

			<v-rating
				v-model="getBookRating"
				half-increments
				color="warning">
			</v-rating>
		</v-card-actions>

		<v-card-actions>
			<v-dialog
				transition="dialog-bottom-transition"
				max-width="800"
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
						<v-card-text>
							<v-row class="info-container">
								<v-col
									cols="12"
									md="6"
									class="d-flex justify-center">
									<img
										:src="getBookImage"
										cover
										width="230"
										height="345"
										:alt="getBookTitle"
										class="img-container"
									/>
								</v-col>

								<v-col
									cols="12"
									md="6"
								>
									<h1>
										{{ getBookTitle }}
									</h1>

									<p class="text--primary mt-4">
										{{ getBookAuthors }}
									</p>

									<div>
										<p class="text--secondary publisher-paragraph">
											{{ getPublishedDate }},
										</p>

										<p class="text--secondary publisher-paragraph">
											{{ getPubliesher }}
										</p>
									</div>


									<v-row
										align="center"
										justify="center"
										class="mt-6"
									>
										<v-col cols="3">
											<div class="element">
												<div class="rating">
													<p class="text--primary d-inline">
														{{ getBookRating }}
													</p>

													<v-icon small class="icon-container">
														mdi-star
													</v-icon>

													<br>

													<p class="text--disabled rating-paragraph">
														{{ getRatingsCount }} avaliações
													</p>
												</div>
											</div>
										</v-col>

										<v-divider
											class="divider-bar"
											vertical
										></v-divider>

										<v-col cols="3">
											<div class="element">
												<div>
													<p class="text--primary d-inline">
														{{ getPageCount }}
													</p>

													<br>

													<p class="text--disabled rating-paragraph">
														Páginas
													</p>
												</div>
											</div>
										</v-col>
									</v-row>

									<div class="d-flex justify-center">
										<v-dialog
											transition="dialog-top-transition"
											max-width="600"
										>
											<template #activator="{ on, attrs }">
												<v-btn
													color="primary"
													v-bind="attrs"
													class="mt-6 ml-2"
													v-on="on"
												>
													Descrição
												</v-btn>
											</template>

											<template #default="dialog_description">
												<v-card>
													<v-toolbar
														color="primary"
														dark
													>
														Descrição
													</v-toolbar>

													<v-card-text>
														<div class="pa-8">
															{{ getBookDescription }}
														</div>
													</v-card-text>

													<v-card-actions class="justify-end">
														<v-btn
															text
															@click="dialog_description.value = false"
														>
															Fechar
														</v-btn>
													</v-card-actions>
												</v-card>
											</template>
										</v-dialog>

										<v-btn
											color="secondary"
											link
											:disabled="! getPurchaseLink"
											:href="getPurchaseLink"
											target="_blank"
											class="mt-6 ml-2"
										>
											Comprar R${{ getBookPrice }}
										</v-btn>

									</div>
								</v-col>
							</v-row>
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
      favorite: true,
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
      const { authors = [] } = this.getVolumeInfo;

      return authors.join(', ');
    },

    getBookRating() {
      const { averageRating } = this.getVolumeInfo;

      return averageRating || 0;
    },

    getPublishedDate() {
      const { publishedDate } = this.getVolumeInfo;

      return publishedDate;
    },

    getPubliesher() {
      const { publisher } = this.getVolumeInfo;

      return publisher;
    },

    getPageCount() {
      const { pageCount } = this.getVolumeInfo;

      return pageCount;
    },

    getRatingsCount() {
      const { ratingsCount } = this.getVolumeInfo;

      return ratingsCount || 0;
    },

    getPurchaseLink() {
      const { saleInfo: { buyLink } = {} } = this.book;

      return buyLink;
    },

    getBookPrice() {
      const { saleInfo: { listPrice: { amount } = {} } = {} } = this.book;

      return amount;
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

<style scoped>
	.img-container {
		box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
		border-radius: 4px;
	}

	.info-container { padding: 30px; }

	.publisher-paragraph {
		display: inline;
		font-size: 10px;
	}

	.rating-paragraph {
		display: inline;
		font-size: 12px;
	}

	.icon-container { margin-bottom: 2px; }

	.element {
  	text-align: center;
	}

	.divider-bar {
		height: 25px;
		margin: auto 0;
	}
</style>
