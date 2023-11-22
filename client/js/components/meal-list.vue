<template>
    <div>
        <ul v-if="meals?.length">
            <li v-for="meal in meals" :key="meal.id">{{ meal.name }}</li>
        </ul>
        <p v-else>нет блюд</p>
        {{ a.asd }}
        <canvas id="asd" ref="kkk"></canvas>
    </div>
</template>
<script setup>
    import { First } from 'stores/FirstPiniaStore.js'

    const a = First()
</script>
<script>
    import Chart from 'chart.js/auto'
    import { getAllMealsFor } from '@/query.js'

    export default {
        apollo: {
            meals: {
                query: getAllMealsFor,
                variables() {
                    return {
                        link: this.$route.params.link
                    }
                },
                update: date => date.getAllMealsFor
            }
        },
        methods: {
            async createAAA() {
                const dataaaa = [
                    { year: 2010, count: 10 },
                    { year: 2011, count: 20 },
                    { year: 2012, count: 15 },
                    { year: 2013, count: 25 },
                    { year: 2014, count: 22 },
                    { year: 2015, count: 30 },
                    { year: 2016, count: 28 },
                ]

                new Chart(
                    this.$refs.kkk,
                    {
                        type: 'doughnut',
                        data: {
                            labels: dataaaa.map(e => e.year),
                            datasets: [
                                {
                                    label: 'за год фигня какая-то',
                                    data: dataaaa.map(e => e.count)
                                }
                            ]
                        }
                    }
                )
            }
        },
        mounted() {
            this.createAAA()
        },
    }
</script>