<script>
export default {
    name: 'AppCard',
    props: {
        title: String,
        language: String,
        realTitle: String,
        vote: Number,
        image: String,
        overview: String
    },
    data() {
        return {
            noVote: null
        }
    },
    methods: {
        starsVote(number) {
            let voteNum = number / 2;
            voteNum = Math.ceil(voteNum);
            console.log(voteNum);
            this.noVote = 5 - voteNum;
            return voteNum;
        }
    }
}
</script>
<template>
    <div class="text-center d-flex flex-column my-card">
        <img :src="'https://image.tmdb.org/t/p/w342' + image" alt="">
        <div class="my-text-image">
            <h3>{{ realTitle }}</h3>
            <h4>{{ title }}</h4>
            <div class="lang-section d-flex flex-column justify-content-center align-items-center">
                <p>Language:</p>
                <img :src="'src/assets/img/' + language + '.png'" :alt="language">
            </div>
            <div class="d-flex justify-content-center align-items-center stars">
                <span v-for="num in starsVote(vote)" :index="num" class="text-warning">&star;</span>
                <span v-for="num in noVote" :index="num">&star;</span>
            </div>
            <h3>Overview:</h3>
            <p>{{ overview }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../style/general.scss' as *;

.my-card {
    position: relative;
    border: 1px solid white;
}

img {
    width: 100%;
    height: 100%;
}

.stars {
    font-size: 2em;
}

.my-text-image {
    flex-grow: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    color: white;
    background-color: rgba($color: #000000, $alpha: 0.8);
    display: none;
    z-index: 999;
    padding: 10px;
    font-size: 0.9em;

    :hover>& {
        display: block;
    }

    .lang-section {
        vertical-align: middle;

        img {
            width: 20px;
        }
    }
}
</style>