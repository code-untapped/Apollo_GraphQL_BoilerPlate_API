export const typeDefs = `
    extend type Mutation {
        updateUserDetails(userToUpdateDetails: ModifyUserInput): ResObject
        deleteUser(userToDelete: ModifyUserInput): ResObject
    } 

    extend type Query {
        getAllUsers: [User]
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

    input ModifyUserInput {
        token: AdminToken!
        first_name: String
        last_name: String
        email: String
        gender: String
        password: String
        admin: String
    }

`