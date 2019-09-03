<template>
  <div>
    <section>

    </section>
    <section>
      
    </section>
    <p>{{ fetchedItem.title }}</p>
    <div>{{ fetchedItem.content }}</div>
    <!-- <p>{{this.$store.state.item.comments}}</p> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created(){
    const itemId = this.$route.params.id;
    console.log( 'itemId : ', itemId )
    // axios.get(`${config.baseUrl}item/${itemId}.json`);
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>

<style>

</style>