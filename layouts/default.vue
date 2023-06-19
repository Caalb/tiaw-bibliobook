<template>
	<v-app>
		<Navbar />
		<v-main class="ma-4">
			<Nuxt />
		</v-main>
		<BBFooter />
	</v-app>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import BBFooter from '../components/BBFooter.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
    BBFooter,
  },
};

</script>

<style lang="scss">
.theme--dark.v-application {
  background-color: var(--v-background-base, #161616) !important;
}

.theme--light.v-application {
  background-color: var(--v-background-base, rgb(235, 235, 235)) !important;
}
</style>
