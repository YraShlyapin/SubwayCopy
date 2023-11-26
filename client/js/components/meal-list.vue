<template>
    <template v-if="!$apollo.queries.category.loading">
        <div class="container">
            <template v-if="category">
                <h1>{{ category?.name }}</h1>
                
                    <div class="menu-list" v-if="category?.meals?.length">
                        <cardEl v-for="meal in category.meals" :key="meal.id" :element="meal" :preLink="'/menu/' + category.link + '/'"></cardEl>
                    </div>
                    <p v-else>нет блюд</p>
                {{ a.asd }}
                <canvas id="asd" ref="kkk"></canvas>
            </template>
            <h1 v-else>нет такой категории</h1>
        </div>
    </template>
    <template v-else>
        <ListOfSkelet></ListOfSkelet>
    </template>
</template>
<script setup>
    import { First } from 'stores/FirstPiniaStore.js'

    const a = First()
</script>
<script>
    // import Chart from 'chart.js/auto'
    import { getCategory } from '@query/query.js'
    import cardEl from '@/template/cardEl.vue';
    import ListOfSkelet from '@/skeleton/menu-list-skelet.vue'

    export default {
        components: {
            cardEl,
            ListOfSkelet
        },
        apollo: {
            category: {
                query: getCategory,
                variables() {
                    return {
                        link: this.$route.params.link
                    }
                },
                update(date) {
                    let result = date.getOneCategory
                    return result
                },
            }
        },
        // methods: {
        //     async createAAA() {
        //         const dataaaa = [
        //             { year: 2010, count: 10 },
        //             { year: 2011, count: 20 },
        //             { year: 2012, count: 15 },
        //             { year: 2013, count: 25 },
        //             { year: 2014, count: 22 },
        //             { year: 2015, count: 30 },
        //             { year: 2016, count: 28 },
        //         ]

        //         this.chart = new Chart(
        //             this.$refs.kkk,
        //             {
        //                 type: 'doughnut',
        //                 data: {
        //                     labels: dataaaa.map(e => e.year),
        //                     datasets: [
        //                         {
        //                             label: 'за год фигня какая-то',
        //                             data: dataaaa.map(e => e.count)
        //                         }
        //                     ]
        //                 }
        //             }
        //         )
                
        //     }
        // },
        // updated: function () {
        //     this.$nextTick(function () {
        //         this?.chart?.destroy()
        //         console.log("asd")
        //         this.createAAA()
        //     })
        // },
        // mounted() {
            
        // },
    }
</script>
<style lang="scss" scoped>
    @import 'style/menu-list.scss';
</style>