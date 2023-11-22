export default `
type Query {
    getAllCategory: [category]
    getOneCategory(id: ID): category
    getAllMealsFor(link: String!): [meal]
    getOneMeal(id: ID): meal
}

type Mutation {
    createMeal(input: mealInput!): meal
    createCategory(input: categoryInput!): category
}

type category {
    id: ID
    name: String
    image: String
    link: String
    meals: [meal]
}

type meal {
    id: ID
    name: String
    id_category: ID
}

input mealInput {
    name: String
    id_category: ID!
}

input categoryInput {
    name: String
    link: String!
    image: String
}
`