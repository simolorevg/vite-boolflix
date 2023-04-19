<script>
export default {
    name: 'AppCard',
    props: {
        title: String,
        language: String,
        realTitle: String,
        vote: String
    }
}
</script>
<template>
    <div class="text-center d-flex flex-column">
        <div class="my-card-image">
            Image section
        </div>
        <div class="my-text-image">
            <h3>{{ realTitle }}</h3>
            <h4>{{ title }}</h4>
            <p>{{ language }}</p>
            <h5>{{ vote }}</h5>
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
</style>