<template>
	<v-app>
		<h3>Home</h3>
	</v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'App',
  head() {
    return {
      title: 'BB | Home',
    };
  },

  beforeMount() {
    const is_auth = localStorage.getItem('auth');

    this.setAuthentication(is_auth);

    if (! is_auth || is_auth === "null") {
      this.$router.push({
        path: '/login',
      });
    }
  },
  computed: {
    ...mapState('user', {
      user_name: 'user',
    }),
  },

  methods: {
    ...mapMutations({ setAuthentication: 'user/setAuthentication' }),
  },
};
</script>

