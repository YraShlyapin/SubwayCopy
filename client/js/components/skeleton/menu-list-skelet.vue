<template>
    <div class="container">
        <div class="text"></div>
        <div class="menu-list">
            <card v-for="n in 6" :key="n"/>
        </div>
    </div>
</template>
<script>
    import card from './card-skelet.vue'

    export default {
        components: {card}
    }
</script>
<style lang="scss" scoped>
.container {
    max-width: 1000px;
    width: 100%;

    margin: 0 auto;
    padding: 18px;
    box-shadow: 0 0 3px rgba(0,0,0,.40);

    .text {
        height: 40px;
        width: 170px;
        background-color: #444;
    }

    .menu-list {
        width: 100%;

        padding-top: 18px;

        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 40px 25px;
    }
}
</style>