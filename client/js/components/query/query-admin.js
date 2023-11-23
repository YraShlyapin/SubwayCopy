import gql from 'graphql-tag'

export const getAllCategoryAdmin = gql`
query getAllCategoryAdmin {
    getAllCategory {
        id
        name
        link
        image
        meals {
            id
            name
            link
        }
    }
}
`

export const createCategory = gql`
mutation createCategoryAdmin($input: categoryInput!) {
    createCategory(input: $input) {
        id
        name
        link
        image
    }
}
`

export const deleteCategory = gql`
mutation deleteCategory($id: ID!) {
    deleteCategory(id: $id) {
        id
        name
    }
}
`

export const editeCategory = gql`
mutation editeCategory($id: ID!, $input: categoryInput!){
    editeCategory(id: $id, input: $input) {
        id
        name
        link
        image
    }
}`