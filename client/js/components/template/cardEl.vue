<template>
    <router-link :to="preLink + element.link" class="menu-list-item">
        <div class="preview-wrapper">
            <img :src="element.image" alt="" class="preview">
        </div>
        <h2>{{ element.name }}</h2>
    </router-link>
</template>
<script>
    export default {
        props: {
            element: Object,
            preLink: String
        }
    }
</script>
<style lang="scss" scoped>
    @import 'style/cardEl.scss';
</style>