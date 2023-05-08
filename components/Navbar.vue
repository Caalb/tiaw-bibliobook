<template>
	<nav>
		<v-app-bar color="primary" dark app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer">
			</v-app-bar-nav-icon>
			
			<v-toolbar-title class="text-uppercase">
				<span class="font-weight-light">Biblio</span><span>Book</span>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<ToggleTheme />
			<v-menu offset-y>
				<template #activator="{ on }">
					<v-btn text v-on="on">
						<v-icon left>
							mdi-chevron-down
						</v-icon>

						<span>Menu</span>
					</v-btn>
				</template>

				<v-list flat>
					<v-list-item
						v-for="link in links"
						:key="link.text"
						router
						:to="link.route"
						active-class="border"
					>
						<v-list-item-title>
							{{ link.text }}
						</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-app-bar>

		<v-navigation-drawer 
			v-model="drawer"
			dark
			app
			class="primary darken-5"
		>
			<v-layout 
				column
				align-center
			>
				<v-flex class="mt-5">
					<v-avatar size="75">
						<img 
							src="https://github.com/Caalb.png"
							alt="Caalb" />
					</v-avatar>

					<p
						class="white--text subheading mt-2 text-center"
					>
						Caalb
					</p>
				</v-flex>
			</v-layout>

			<v-divider></v-divider>

			<v-list flat>
				<v-list-item
					v-for="link in links"
					:key="link.text"
					router
					:to="link.route"
					active-class="border"
				>
					<v-list-item-action>
						<v-icon>{{ link.icon }}</v-icon>
					</v-list-item-action>

					<v-list-item-content>
						<v-list-item-title>
							{{ link.text }}
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script>
import ToggleTheme from './partials/ToggleTheme.vue';
export default {
  name: 'BBNavbar',
	components: {
		ToggleTheme,
	},
	
  data: () => ({
    drawer: false,
    links: [
			{ icon: 'mdi-home-circle-outline', text: 'Home', route: '/' },
      { icon: 'mdi-book-open-page-variant-outline', text: 'Meus livros', route: '/books' },
      { icon: 'mdi-book-search-outline', text: 'Buscar livros', route: '/books/search' },
			{ icon: 'mdi-exit-to-app', text: 'Sair', route: '/login' },
    ],
  }),
};
</script>
<style scoped>
.border {
  border-left: 4px solid #fafafa;
}
</style>
