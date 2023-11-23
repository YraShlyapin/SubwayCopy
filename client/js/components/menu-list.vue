<template>
    <div class="container">
        <h1>Наше меню</h1>
        <div class="menu-list">
            <template v-if="!$apollo.queries.categories.loading">
                <cardEl v-for="category in categories" :key="category.id" :element="category" preLink="/menu/">asd</cardEl>
            </template>
            <template v-else>
                <card v-for="n in 6" :key="n"/>
            </template>
        </div>
    </div>
</template>
<script>
    import { getAllCategory } from '@query/query.js'
    import cardEl from '@/template/cardEl.vue'
    import card from '@/skeleton/card-skelet.vue'

    export default {
        components: {
            cardEl,
            card
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