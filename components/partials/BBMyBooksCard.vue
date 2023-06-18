<template>
	<v-card class="mx-auto" max-width="300" raised>
		<v-img :src="book.image" height="200px"></v-img>

		<v-card-title>{{ book.title }}</v-card-title>

		<v-card-subtitle>{{ book.author }}</v-card-subtitle>

		<v-card-actions>
			<v-btn icon @click="favorite = !favorite">
				<v-icon color="error">{{ !favorite ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
			</v-btn>

			<v-rating v-model="rating" half-increments color="warning"></v-rating>
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
							{{ book.title }}
						</v-toolbar>

						<v-card-text>
							<div>
								<p class="text--primary">
									{{ book.description }}
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
export default {
  data() {
    return {
      book: {
        title: 'The Hitchhiker\'s Guide to the Galaxy',
        author: 'Douglas Adams',
        description:
          'Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker\'s Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor. Together, this dynamic pair began a journey through space aided by a galaxyful of fellow travelers: Zaphod Beeblebrox, the two-headed, three-armed ex-hippie and totally out-to-lunch president of the galaxy; Trillian (formerly Tricia McMillan), Zaphod\'s girlfriend, whom Arthur tried to pick up at a cocktail party once upon a time zone; Marvin, a paranoid, brilliant, and chronically depressed robot; Veet Voojagig, a former graduate student who is obsessed with the disappearance of all the ballpoint pens he bought over the years.',
        image: 'https://picsum.photos/400/300',
      },
      favorite: false,
      rating: 4,
    };
  },
};
</script>
