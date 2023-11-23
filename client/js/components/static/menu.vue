<template>
    <header>
        <router-link to="/" class="logo"><img src="https://subway.ru/local/templates/artw_new/images/logo.png" alt=""></router-link>
        <nav>
            <div class="menu-item">
                <router-link to="/">Найти ресторан</router-link>
            </div>
            <div class="menu-item">
                <router-link to="/menu">Наше меню</router-link>
                <div class="menu-info">
                    <router-link v-for="category in categoriesForMenu" :key="category.id" :to="'/menu/' + category.link">
                        {{ category.name }}
                    </router-link>
                </div>
            </div>
            <div class="menu-item">
                <router-link to="/">Программа лояльности</router-link>
            </div>
            <div class="menu-item">
                <router-link to="/">Акции</router-link>
            </div>
            <div class="menu-item">
                <router-link to="/">О компании</router-link>
            </div>
            <div class="menu-item">
                <router-link to="/">Оставить отзыв</router-link>
            </div>
        </nav>
        <div id="donload">
            <img src="https://fakeimg.pl/120x40" alt="">
            <img src="https://fakeimg.pl/120x40" alt="">
        </div>
    </header>
</template>
<script>
    import { getAllNameCategory } from '@query/query.js'

    export default {
        data() {
            return {
                
            }
        },
        apollo: {
            categoriesForMenu: {
                query: getAllNameCategory,
                update: data => data.getAllCategory,
                fetchPolicy: 'cache-and-network'
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import 'style/menu.scss';
</style>