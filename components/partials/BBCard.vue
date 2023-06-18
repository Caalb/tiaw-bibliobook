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

		<v-card-actions class="justify-space-between mx-2">
			<v-btn
				color="success"
				text
			>
				Comprar
			</v-btn>

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
								Close
							</v-btn>
						</v-card-actions>
					</v-card>
				</template>
			</v-dialog>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
  name: 'BBCard',
  props: {
    book: {
      type: Object,
      required: true,
    },
  },

  computed: {
    getVolumeInfo() {
      const { volumeInfo = {} } = this.book;

      return volumeInfo;
    },

    getBookImage() {
      const { imageLinks: { thumbnail, small, medium, large } = {} } = this.getVolumeInfo;

      return large ?? medium ?? small ?? thumbnail;
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
  },

  data() {
    return {
      show: false,
    };
  },
};
</script>