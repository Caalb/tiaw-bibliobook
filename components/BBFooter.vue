<template>
	<v-footer
		dark
		padless
		app
		inset
	>

		<v-card
			class="flex"
			flat
			tile
			color="primary"
			:elevation="10"
		>

			<v-card-text class="py-2 white--text text-center">
				{{ new Date().getFullYear() }} — <strong>Bibliobook</strong>
			</v-card-text>
		</v-card>
	</v-footer>
</template>

<script>
export default {
  name: 'BBFooter',
};
</script>


