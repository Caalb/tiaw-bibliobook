<template>
	<v-btn icon @click="toggleTheme">
		<v-icon>
			{{ $vuetify.theme.isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}
		</v-icon>
	</v-btn>
</template>

<script>
export default {
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>