<template>
  <div>
    <p v-for="item in this.$store.state.ask">
      <router-link v-bind:to="`item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>{{ item.time_ago }} by {{item.user}}</small>
    </p>
  </div>
</template>

<script>
// import { fetchAskList } from '../api/index.js';

import { mapState } from 'vuex';

export default {
  computed: {

  },
  created(){
    this.$store.dispatch('FETCH_ASK');

    // fetchAskList()
    //   .then(response => this.ask = response.data)
    //   .catch(error => console.log(error));
  }
}
</script>

<style>

</style>