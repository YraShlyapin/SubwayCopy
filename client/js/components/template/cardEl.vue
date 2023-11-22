<template>
    <router-link :to="'/menu/' + category.link" class="menu-list-item">
        <div class="preview-wrapper">
            <img :src="category.image" alt="" class="preview">
        </div>
        <h2>{{ category.name }}</h2>
    </router-link>
</template>
<script>

    export default {
        props: {
            category: {
                type: Object,
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import 'style/cardEl.scss';
</style>