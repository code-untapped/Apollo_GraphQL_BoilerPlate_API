export const typeDefs = `
    extend type Query {
        login(creds: UserCreds): ResObject
    }  

    input UserCreds {
        email: String 
        password: String
    }

`