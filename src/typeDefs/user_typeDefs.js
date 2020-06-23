export const typeDefs = `
    extend type Query {
    }
    
    type Mutation {
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