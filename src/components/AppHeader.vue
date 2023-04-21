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
    <div class="container d-flex justify-content-between justify-content-end align-items-center">
        <img src="../assets/img/logo.png" alt="LogoFlix">
        <div class="search-container d-flex align-items-center">
            <label for="userSearch" class="d-none">Cerca un film/serietv</label>
            <input type="text" id="userSearch" v-model="store.userInput" placeholder="Cerca Film / Serie TV">
            <button class="btn btn-danger" @click="$emit('search')">Cerca</button>
        </div>
    </div>
</template>
<style lang="scss">
@use '../style/general.scss' as*;

.search-container {
    width: 40%;
}
</style>