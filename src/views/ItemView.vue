<template>
  <div>
      <p>{{ itemInfo.title }}</p>
      <p>{{ itemInfo.content }}</p>
      <!-- <p>{{this.$store.state.item.comments}}</p> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  computed: {
    itemInfo(){
      return this.$store.state.item;
    }
  },
  created(){
    const itemId = this.$route.query.id;
    console.log( 'itemId : ', itemId )
    // axios.get(`${config.baseUrl}item/${itemId}.json`);
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>

<style>

</style>