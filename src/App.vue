<script>
import { store } from './store';
import axios from 'axios';
import AppCard from './components/AppCard.vue';
import AppHeader from './components/AppHeader.vue';
export default {
  components: {
    AppHeader,
    AppCard
  },
  data() {
    return {
      store
    }
  },
  methods: {
    filterThings() {
      const params = {
        api_key: this.store.mykey
      };
      if (this.store.userInput) {
        params.query = this.store.userInput;
      }
      axios.get(this.store.urlMovies, { params }).then((resp) => {
        this.store.moviesSelected = resp.results;
      })
      // axios.get(this.store.urlTv, { params }).then((resp) => {
      //   this.store.tvSelected = resp.results;
      // })
      console.log(this.store.userInput);
    },
    handleFilter() {
      this.filterThings();
    }
  }
}
</script>

<template>
  <AppHeader @search="handleFilter" />
  <h2>Films</h2>
  <div class="row row-cols-3 g-4">
    <div class="col" v-for="(movie, index) in store.moviesSelected" :key="index">
      <AppCard :title="movie.original_title" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './style/general.scss' as *;
</style>
