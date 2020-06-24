export const typeDefs = `
    extend type Mutation {
        singleUpload(file: Upload!): File!
    }  

    type File {
        filename: String!
        mimetype: String!
        encoding: String!
    }

`