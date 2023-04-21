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
      store,
      searchGo: false
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
        console.log(resp);
        this.store.moviesSelected = resp.data.results;
      })
      axios.get(this.store.urlTv, { params }).then((resp) => {
        this.store.tvSelected = resp.data.results;
      })

    },
    handleFilter() {
      this.filterThings();
      this.searchGo = true;
    },
    lenghtArray(thing) {
      if (thing.length > 0) {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<template>
  <AppHeader @search="handleFilter" />
  <div class="my-container">
    <h2 v-if="(!this.searchGo)">Cerca un film o serie tv</h2>
    <h2 v-if="this.searchGo && lenghtArray(this.store.moviesSelected)" class="my-4">Films</h2>
    <div v-if="this.searchGo && lenghtArray(this.store.moviesSelected)" class="row row-cols-3 g-4 my-row">
      <div class="col" v-for="(movie, index) in store.moviesSelected" :key="index">
        <AppCard :title="movie.title" :language="movie.original_language" :realTitle="movie.original_title"
          :vote="movie.vote_average" :image="movie.poster_path" />
      </div>
    </div>
    <h2 v-if="this.searchGo && lenghtArray(this.store.tvSelected)" class="my-4">Serie TV</h2>
    <div v-if="this.searchGo && lenghtArray(this.store.tvSelected)" class="row row-cols-3 g-4 my-row">
      <div class="col" v-for="(fiction, index) in store.tvSelected" :key="index">
        <AppCard :title="fiction.name" :language="fiction.original_language" :realTitle="fiction.original_name"
          :vote="fiction.vote_average" :image="fiction.poster_path" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './style/general.scss' as *;

.my-container {
  width: 80%;
  margin: 0 auto;
}

.my-row {
  background-color: grey;
  padding: 10px;
}
</style>
