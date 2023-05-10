<template>
	<v-app>
		<v-main class="d-flex justify-center align-center p-0">
			<v-col cols="10" lg="3" md="6" class="mx-auto">
				<v-card class="pa-4">
					<div class="text-center">
						<v-avatar size="100" color="indigo lighten-4">
							<v-icon size="40" color="indigo">mdi-account</v-icon>
						</v-avatar>

						<h2 class="indigo--text mt-3">Bibliobook</h2>
					</div>

					<v-form ref="form" @submit.prevent="submitHandler">
						<v-card-text>
							<v-text-field
								v-model="name"
								:rules="emailRules"
								type="email"
								label="Usuário"
								placeholder="Usuário"
								prepend-inner-icon="mdi-account"
								required
							/>

							<v-text-field
								v-model="password"
								:rules="passwordRules"
								:type="passwordShow ? 'text' : 'password'"
								label="Senha"
								placeholder="Senha"
								prepend-inner-icon="mdi-key"
								:append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
								required
								@click:append="passwordShow = !passwordShow"
							/>

							<v-switch label="Lembre-me" color="indigo"></v-switch>
						</v-card-text>

						<v-card-actions class="justify-center">
							<v-btn :loading="loading" type="submit" color="indigo">
								<span class="white--text px-8">Login</span>
							</v-btn>
						</v-card-actions>

						<p class="text-end mt-3 mb-0 text-caption">Ainda não tem uma conta?
							<NuxtLink to="/sign" color="black">clica aqui para criar</NuxtLink>
						</p>
					</v-form>
				</v-card>
			</v-col>
		</v-main>
		
		<v-snackbar v-model="snackbar" top color="green">
			Bem vindo, {{ name }}
		</v-snackbar>
	</v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'App',
	layout: 'empty',
  data: () => ({
    loading: false,
    snackbar: false,
    passwordShow: false,
    name: '',
    emailRules: [(v) => !!v || 'Um usuário é requerido'],
    password: '',
    passwordRules: [
      (v) => !!v || 'Uma senha é requerida',
      (v) =>
        (v && v.length >= 6) || 'A senha precisa ter 6 caracteres ou mais!',
    ],
  }),

  head() {
    return {
      title: 'BB | Login',
    };
  },

  computed: {
    ...mapState('user', {
      user_name: 'user',
    }),
  },

  methods: {
    ...mapMutations({
      setUser: 'user/setUser',
      setAuthentication: 'user/setAuthentication',
    }),

    async submitHandler() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        this.setUser(this.name);
        this.setAuthentication(true);

        await new Promise((resolve) => setTimeout(resolve, 3000));
        this.loading = false;
        this.snackbar = true;

        await new Promise((resolve) => setTimeout(resolve, 700));
        this.$router.push({ path: '/' });
      }
    },
  },
};
</script>
<style scoped>
.container {
  padding: 0 !important;
}
</style>
