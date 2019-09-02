<template>
  <div>
      <div v-for="user in users">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js'
export default {
  data(){
    return {
      users: []
    }
  },
  created(){
    let vm = this;
    fetchJobsList()
      .then(function(response){
        vm.users = response.data;
      })
      .catch(function(error){

      })
  }
}
</script>

<style>

</style>