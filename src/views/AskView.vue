<template>
  <div>
    <p v-for="item in this.$store.state.ask">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
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