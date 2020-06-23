const port = process.env.PORT || 8080;
const { ApolloServer, makeExecutableSchema } = require("apollo-server-express");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const resolvers = {};
const Query = `
    type Query {
        _empty: String
    }
    `;

const schema = makeExecutableSchema({
    typeDefs: [Query],
    resolvers: merge(resolvers)
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