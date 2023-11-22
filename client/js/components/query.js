import gql from 'graphql-tag'

export const getAllCategory = gql`
query getAllCategory {
    getAllCategory{
        id
        name
        link
        image
    }
}`

export const getAllNameCategory = gql`
query getAllNameCategory {
    getAllCategory{
        id
        link
        name
    }
}`

export const getAllMealsFor = gql`
query getAllMeals($link: String!) {
    getAllMealsFor(link: $link) {
        id
        name
    }
}`