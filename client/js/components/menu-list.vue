<template>
    <div class="container">
        <h1>Наше меню</h1>
        <div class="menu-list">
            <cardEl v-for="category in categories" :key="category.id" :element="category" preLink="/menu/">asd</cardEl>
        </div>
    </div>
</template>
<script>
    import { getAllCategory } from '@/query.js'
    import cardEl from '@/template/cardEl.vue'

    export default {
        components: {
            cardEl
        },
        apollo: {
            categories: {
                query: getAllCategory,
                update: data => data.getAllCategory
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import 'style/menu-list.scss';
</style>