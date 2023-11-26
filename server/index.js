import express from 'express'
import cors from 'cors'

import { PrismaClient } from '@prisma/client'

import { buildSchema } from 'graphql'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema.js'

import path from 'path'
import 'dotenv/config'

const __dirname = path.resolve()

const port = process.env.PORT || 8080
const host = process.env.HOST || 'localhost'

const prisma = new PrismaClient()
const app = express()

app.use(cors())
app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')))

const root = {
    //query
    async getAllCategory() {
        return await prisma.category.findMany({
            include: {
                meals: true
            }
        })
    },
    async getOneCategory({link}) {
        return await prisma.category.findUnique({
            where: {
                link: link
            },
            include: {
                meals: true
            }
        })
    },
    async getAllMealsFor({link}) {
        const meals = (await prisma.category.findUnique({
            where: {
                link: link
            },
            select: {
                meals: true
            }
        }))?.meals
        return meals?.length ? meals : null
    },
    async getOneMeal({id}) {
        if (+id) {
            return await prisma.meal.findUnique({
                where: {
                    id: +id
                }
            })
        }
        return null
    },
    //mutation
    async createMeal({input}) {
        if (+input.id_category){
            let obj = {...input, id_category: +input.id_category}
            console.log(obj)
            return await prisma.meal.create({data: obj})
        }
        return null
    },
    async createCategory({input}) {
        return await prisma.category.create({data: {...input}})
    },
    async deleteCategory({id}) {
        if (+id){
            return await prisma.category.delete({
                where: {
                    id: +id
                }
            })
        }
        return null
    }
}

app.use(
    '/graphql',
    graphqlHTTP({
        schema: buildSchema(schema),
        graphiql: true,
        rootValue: root
    })
)

app.use((req, res) => res.sendFile(path.resolve(__dirname, '..', 'client', "build", 'index.html')))

app.listen(port, host, () => {
    console.log(`server is start on http://${host}:${port}`)
})

process.on('SIGINT', () => {
    console.log('server close now')
    process.exit()
})