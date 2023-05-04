<template>
	<v-app>
		<h1>index</h1>
	</v-app>
</template>

<script lang="ts">
import { mapState } from 'vuex';

export default {
  name: 'App',
  head() {
    return {
      title: 'BB | Home',
    };
  },

  middleware({ store, redirect }) {
    if (!store.state.authenticated) {
      return redirect('/login');
    }
  },

  computed: {
    ...mapState('user', {
      user_name: 'user',
    }),
  },
};
</script>
<style>
.backgruond {
  height: 300px;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  background-size: cover;
}
</style>
