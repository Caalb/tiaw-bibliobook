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
						:class="{ 'secondary--text': isActiveLink(link.route) }"
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
							:src="avatarImage"
							:alt="getUserName"
							@click="updateFile"
						/>

						<input ref="fileInput" type="file" style="display: none;" @change="handleFileUpload" />
					</v-avatar>

					<p
						class="white--text subheading mt-2 text-center"
					>
						{{ getUserName }}
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
					:class="{ 'border': isActiveLink(link.route) }"
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

import { getUserName } from './../helpers/getUserName';

export default {
  name: 'BBNavbar',
  components: { ToggleTheme },
  data: () => ({
    drawer: false,
    avatarImage: '',
    links: [
      { icon: 'mdi-home-circle-outline', text: 'Home', route: '/' },
      { icon: 'mdi-book-open-page-variant-outline', text: 'Meus livros', route: '/books' },
      { icon: 'mdi-book-search-outline', text: 'Buscar livros', route: '/books/search' },
      { icon: 'mdi-exit-to-app', text: 'Sair', route: '/login' },
    ],
  }),

  computed: {
    getUserName() {
      return getUserName();
    },
  },

  created() {
    this.avatarImage = localStorage.getItem('avatarImage') || 'https://www.fatosdesconhecidos.com.br/wp-content/plugins/wp-user-avatars/wp-user-avatars/assets/images/mystery.jpg';
  },

  methods: {
    updateFile() {
      this.$refs.fileInput.click();
    },

    handleFileUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Image = reader.result;
        this.avatarImage = base64Image;
        localStorage.setItem('avatarImage', base64Image);
      };

      reader?.readAsDataURL(file);
    },

    isActiveLink(route) {
      return this.$route.path === route;
    },
  },
};

</script>

<style scoped>
.border {
  border-left: 4px solid #ffffff;
}
</style>
