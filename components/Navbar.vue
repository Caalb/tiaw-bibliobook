<template>
	<nav>
		<v-navigation-drawer
			v-model="drawer"
			app
			:mini-variant.sync="mini"
			permanent
		>
			<v-list-item class="px-2 my-2">
				<v-list-item-avatar>
					<v-img src="https://github.com/Caalb.png"></v-img>
				</v-list-item-avatar>

				<v-list-item-title>Caalb</v-list-item-title>

				<v-btn
					icon
					@click.stop="mini = !mini"
				>
					<v-icon>mdi-chevron-left</v-icon>
				</v-btn>
			</v-list-item>

			<v-divider></v-divider>

			<v-list>
				<v-list-item link>
					<v-list-item-icon>
						<v-icon>
							mdi-book
						</v-icon>
					</v-list-item-icon>

					<v-list-item-title>
						Meus livros
					</v-list-item-title>
				</v-list-item>

				<v-list-item link>
					<v-list-item-icon>
						<v-icon>
							mdi-magnify
						</v-icon>
					</v-list-item-icon>

					<v-list-item-title>
						Buscar livros
					</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script>
  export default {
    name: 'BBHeader',

    data() {
      return {
        drawer: true,
				mini: false,
      };
    },
  };
</script>
