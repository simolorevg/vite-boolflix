<script>
export default {
    name: 'AppSlider',
    data() {
        return {
            slider1: [
                'https://image.tmdb.org/t/p/w342/zaqam2RNscH5ooYFWInV6hjx6y5.jpg', 'https://image.tmdb.org/t/p/w342/tzNF2E29DcCtRBfQf3Vy92WQki9.jpg'],
            slider2: ['https://image.tmdb.org/t/p/w342/vmdCodGh2nUPRDBQbIVsxGaIMyK.jpg', 'https://image.tmdb.org/t/p/w342/i318aG3wUpGLDPxn3cmKM9UvpOy.jpg',
                'https://image.tmdb.org/t/p/w342/swUrOYR6IB3nmPrJmXM2GqArm32.jpg', 'https://image.tmdb.org/t/p/w342/8F2KIxUaVLq06TLwIVwt7F0vVgJ.jpg'],
            slider3: ['https://image.tmdb.org/t/p/w342/x4QByhE7lOMtUTi32xWSqoOHenD.jpg', 'https://image.tmdb.org/t/p/w342/yCTwLedpVcl3zpg0kV15b0brObq.jpg']
        }
    }
}
</script>
<template>
    <h2>Scegli un film o una fiction</h2>
    <div class="my-slider">
        <div class="my-slide" v-for="(img, index) in slider1" :key="index">
            <img :src="img" alt="img">
        </div>
        <div class="my-slide" v-for="(imgs, index) in slider2">
            <img :src="imgs" alt="img">
        </div>
        <div class="my-slide" v-for="(img, index) in slider3" :key="index">
            <img :src="img" alt="img">
        </div>
        <div class="my-slide" v-for="(img, index) in slider1" :key="index">
            <img :src="img" alt="img">
        </div>
        <div class="my-slide" v-for="(imgs, index) in slider2">
            <img :src="imgs" alt="img">
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../style/general.scss' as *;

.my-slider {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.my-slider::before,
.my-slider::after {
    height: 100%;
    width: 10%;

}

.my-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: movmentslides 20s linear infinite;
}

img {
    width: 250px;
}

@keyframes movmentslides {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100% * 4);
    }
}
</style>