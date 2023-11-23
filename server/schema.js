//сделать one catrgory for link
export default `
type Query {
    getAllCategory: [category]
    getAllMealsFor(link: String!): [meal]
    getOneCategory(link: String!): category
    getOneMeal(id: ID): meal
}

type Mutation {
    createMeal(input: mealInput!): meal
    createCategory(input: categoryInput!): category
    deleteCategory(id: ID!): category
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
    image: String
    link: String
    id_category: ID
}

input mealInput {
    name: String
    image: String
    link: String
    id_category: ID!
}

input categoryInput {
    name: String
    link: String!
    image: String
}
`