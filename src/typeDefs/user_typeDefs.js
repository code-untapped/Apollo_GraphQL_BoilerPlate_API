export const typeDefs = `
    extend type Query {
    }

    extend type Mutation {
    }  

    type User {
        id: Int
        first_name: String
        last_name: String
        email: String
        gender: String
        password: String
        admin: String
        token: String
    }

`