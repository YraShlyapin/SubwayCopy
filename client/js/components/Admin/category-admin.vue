<template>
    <div>
        <form @submit.prevent="postCategory">
            <!--переделать сюда редактирование-->
            <input type="text" v-model="formData.name">
            <input type="text" v-model="formData.link">
            <input type="text" v-model="formData.image">
            <button type="submit">submit</button>
        </form>
        <template v-if="categories?.length">
            <div v-for="category, index in categories" :key="category.id">
                <template v-if="category.id != editeData.id">
                    <p>{{ category.id }}</p>
                    <img :src="category.image">
                    <p>name: {{ category.name }}</p>
                    <p>link: {{ category.link }}</p>
                    <template v-if="category?.meals?.length">
                        блюда:
                        <div v-for="meal in category.meals" :key="meal.id">
                            <p>{{ meal.name }}</p>
                            <p>{{ meal.link }}</p>
                            <br/>
                        </div>
                    </template>
                    <p v-else>нет блюд</p>
                    <br/>
                    <button @click="deleteCategory(index)">удалить</button>
                    <button @click="setEditeIndex(category.id)">редактировать</button>
                </template>
                <template v-else>
                    <p>{{ category.id }}</p>
                    <input type="text" :placeholder="'name: ' + category.name" v-model="editeData.name">
                    <input type="text" :placeholder="'link: ' + category.link" v-model="editeData.link">
                    <img :src="editeData.image || category.image" alt="">
                    <input type="text" :placeholder="category.image" v-model="editeData.image">
                    <br/>
                    <button @click="unsetIndex">отменить</button>
                    <button @click="editeCategory(index)">сохранить</button>
                </template>
            </div>
        </template>
        <p v-else>нет категорий</p>
    </div>
</template>
<script>
    import { getAllCategoryAdmin, createCategory, deleteCategory, editeCategory } from '@query/query-admin.js'
    import cardAdmin from '@adm/template/card-admin.vue'

    export default {
        data() {
            return {
                formData: {
                    name: '',
                    link: '',
                    image: '',
                },
                editeData: {
                    id: NaN,
                    name: '',
                    link: '',
                    image: ''
                }
            }
        },
        components: {
            cardAdmin
        },
        methods: {
            setEditeIndex(id) {
                this.editeData.id = id
            },
            unsetIndex() {
                this.editeData = {
                    id: NaN,
                    name: '',
                    link: '',
                    image: ''
                }
            },
            postCategory() {
                const self = this

                this.$apollo.mutate({
                    mutation: createCategory,
                    update(store, {data: { createCategory }}) {
                        self.categories = [...self.categories, createCategory]
                        self.formDat = {name: '',link: '',image: ''}
                    },
                    variables: {
                        input: {...self.formData}
                    }
                })
            },
            deleteCategory(index) {
                let category = this.categories[index]

                const self = this

                this.$apollo.mutate({
                    mutation: deleteCategory,
                    update(store, {data: { deleteCategory }}) {
                        if (deleteCategory) {
                            self.categories = self.categories.filter(e => e.id != deleteCategory?.id)
                        }
                    },
                    variables: {
                        id: category?.id
                    }
                })
            },
            editeCategory(index) {
                let category = this.categories[index]

                const self = this

                console.log(this.editeData)

                // this.$apollo.mutate({
                //     mutation: editeCategory,
                //     update(store, {data: { editeCategory }}) {
                //         if (deleteCategory) {
                //             self.categories = self.categories.filter(e => e.id != deleteCategory?.id)
                //         }
                //     },
                //     variables: {
                //         id: category?.id,
                //         input: self.editeData
                //     }
                // })
            }
        },
        apollo: {
            categories: {
                query: getAllCategoryAdmin,
                update: data => data.getAllCategory
            }
        }
    }
</script>