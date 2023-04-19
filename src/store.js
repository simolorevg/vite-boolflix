import { reactive } from 'vue';
export const store = reactive({
    urlMovies: 'https://api.themoviedb.org/3/movie',
    urlTv: 'https://api.themoviedb.org/3/tv',
    mykey: '8a45555fb356cb2f3552a00dce671350',
    userInput: '',
    moviesSelected: [],
    tvSelected: []
})