<script>
export default {
    name: 'AppCard',
    props: {
        image: String,
        title: String,
    }
}
</script>
<template>
    <div class="text-center d-flex flex-column">
        <img :src="image" alt="imagefilm">
        <p>{{ title }}</p>
    </div>
</template>
<style lang="scss" scoped>
@use '../style/general.scss' as *;
</style>