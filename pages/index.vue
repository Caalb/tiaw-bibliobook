<template>
	<v-container fluid>
		<v-row align="center" justify="center">
			<v-col cols="12" sm="8" md="6" lg="4">
				<h1
					:class="{ 'dark' : getIsThemeDark}"
					class="text-center"
				>
					<vue-typer
						:text='["Bem vindo ao Bibliobook!"]'
						:repeat='0'
						:shuffle='false'
						initial-action='typing'
						:pre-type-delay='70'
						:type-delay='70'
						:pre-erase-delay='2000'
						:erase-delay='250'
						erase-style='clear'
						:erase-on-complete='false'
						caret-animation='smooth'
					/>
				</h1>

				<p
					:class="{ 'dark' : getIsThemeDark}"
					class="mt-8 text-center"
				>
					<vue-typer
						text="Bem-vindo à nossa biblioteca virtual! Aqui você pode encontrar livros dos mais variados temas e autores. Navegue em nossa coleção, descubra novas histórias e amplie seus horizontes. Boa leitura!"
						:repeat='0'
						:shuffle='false'
						initial-action='typing'
						:pre-type-delay='34'
						:type-delay='34'
						:pre-erase-delay='1000'
						:erase-delay='100'
						erase-style='clear'
						:erase-on-complete='false'
						caret-animation='smooth'
					>
					</vue-typer>
				</p>
			</v-col>
		</v-row>

		<v-row>
			<v-col align="center" justify="center">
				<v-card
					flat
					tile
					width="750"
					justify="center"
				>
					<v-window v-model="onboarding">
						<v-window-item v-for="n in length" :key="`card-${n}`">
							<v-card color="grey" height="390">
								<v-row class="fill-height" align="center" justify="center">
									<v-img :src="`/slider/${n}.png`" height="400" :contain="false" :cover="true"/>
								</v-row>
							</v-card>
						</v-window-item>
					</v-window>

					<v-card-actions class="justify-space-between">
						<v-btn
							text
							@click="prev"
						>
							<v-icon>mdi-chevron-left</v-icon>
						</v-btn>
						<v-item-group
							v-model="onboarding"
							class="text-center"
							mandatory
						>
							<v-item
								v-for="n in length"
								:key="`btn-${n}`"
								v-slot="{ active, toggle }"
							>
								<v-btn
									:input-value="active"
									icon
									@click="toggle"
								>
									<v-icon>mdi-record</v-icon>
								</v-btn>
							</v-item>
						</v-item-group>
						<v-btn
							text
							@click="next"
						>
							<v-icon>mdi-chevron-right</v-icon>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import {
  mapState,
  mapMutations,
  mapActions,
} from 'vuex';

export default {
  name: 'App',
  head() {
    return {
      title: 'BB | Home',
    };
  },

  data: () => ({
    featuredBooks: [
      {
        id: 1,
        title: 'O Senhor dos Anéis',
        author: 'J. R. R. Tolkien',
        cover: 'https://picsum.photos/id/302/200/300',
      },
      {
        id: 2,
        title: 'A Menina que Roubava Livros',
        author: 'Markus Zusak',
        cover: 'https://picsum.photos/id/301/200/300',
      },
      {
        id: 3,
        title: '1984',
        author: 'George Orwell',
        cover: 'https://picsum.photos/id/300/200/300',
      },
    ],

    length: 7,
    onboarding: 0,
  }),

  beforeMount() {
    const is_auth = localStorage.getItem('auth');

    this.setAuthentication(is_auth);

    if (!is_auth || is_auth === 'null') {
      this.$router.push({ path: '/login' });
    }

    this.fetchBooks();
  },
  computed: {
    ...mapState('user', {
      user_name: 'user',
    }),

    getIsThemeDark() {
      return this.$vuetify.theme.isDark;
    },
  },

  methods: {
    ...mapMutations({ setAuthentication: 'user/setAuthentication' }),
    ...mapActions({ fetchBooks: 'book/fetchBooks'}),

    next() {
      this.onboarding = this.onboarding + 1 === this.length
        ? 0
        : this.onboarding + 1;
    },

    prev() {
      this.onboarding = this.onboarding - 1 < 0
        ? this.length - 1
        : this.onboarding - 1;
    },
  },
};
</script>

<style scoped>
 ::v-deep .dark .typed {
    color: #fff !important;
  }
</style>
