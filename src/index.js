import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import express from "express";
import cors from "cors";
import { merge } from "lodash";

import { typeDefs as userSchema } from "../src/typeDefs/user_typeDefs";
import { resolvers as userResolvers } from "../src/resolvers/user_resolver";
import { typeDefs as Utils } from "../src/typeDefs/util_typeDefs";

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());

const resolvers = {};
const Query = `
    type Query {
        _empty: String
    }
    `;
const Mutation = `
    type Mutation {
        _empty: String
    }
    `;

const schema = makeExecutableSchema({
    typeDefs: [Query, Mutation, userSchema, Utils],
    resolvers: merge(resolvers, userResolvers)
});

const server = new ApolloServer({ schema, debug: true, tracing: true, playground: true });

server.applyMiddleware({ app, path: "/graphql" });

app.get('/', (req, res) => {
    res.send("we entered");
});

try {
    app.listen(port, () => {
        console.log(`server ready on ${server.graphqlPath}`);

    });
} catch (err) {
    throw err
}