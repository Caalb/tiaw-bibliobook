<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="9" md="6" lg="4">
				<v-text-field
					v-model="searchQuery"
					label="Buscar Livro"
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
				>
					Buscar
				</v-btn>
			</v-col>
		</v-row>

		<v-row>
			<v-col v-for="i in 20" :key="i" cols="12" sm="6" md="4" lg="3">
				<BBCard/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import BBCard from './../../components/partials/BBCard.vue';

export default {
  name: 'BBBooks',
  components: { BBCard },
};

</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
</style>