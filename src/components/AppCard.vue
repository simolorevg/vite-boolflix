<script>
export default {
    name: 'AppCard',
    props: {
        title: String,
        language: String,
        realTitle: String,
        vote: Number,
        image: String
    },
    data() {
        return {
            myVote: this.vote,
            noVote: null,
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
    <div class="text-center d-flex flex-column">
        <div class="my-card-image">
            <img :src="image" alt="">
        </div>
        <div class="my-text-image">
            <h3>{{ realTitle }}</h3>
            <h4>{{ title }}</h4>
            <div class="lang-section">
                <p>{{ language }}</p>
            </div>
            <div class="stars-vote">
                <span v-for="num in starsVote(vote)" :index="num">S</span>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../style/general.scss' as *;

.my-card-image {
    width: 100%;
    height: 60%;
    background-color: orange;
}

.my-text-image {
    flex-grow: 1;
    width: 100%;
}

.it {
    background-image: url('../assets/img/icons8-italy-48.png');
}
</style>