<script>
import { store } from '../store';
export default {
    name: 'AppHeader',
    emits: ['search'],
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <div class="container d-flex justify-content-between align-items-center">
        <h1>Boolflix</h1>
        <div class="search-container">
            <label for="userSearch">Cerca un film/serietv</label>
            <input type="text" id="userSearch" v-model="store.userInput">
            <button class="btn btn-warning" @click="$emit('search')">Cerca</button>
        </div>
    </div>
</template>
<style lang="scss">
@use '../style/general.scss' as*;

.search-container {
    width: 40%;
}
</style>