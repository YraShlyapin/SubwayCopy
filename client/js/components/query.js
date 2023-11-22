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

export const getCategory = gql`
query getOneCategory($link: String!) {
    getOneCategory(link: $link) {
        name
        link
        meals {
            id
            name
            link
        }
    }
}`