const typeDefs = `#graphql
scalar Date

  type Query {
    artThings: [ArtThing]
  }

  type Mutation {
    createArtThing (title: String!, description: String, date: Date, image: String): ArtThing
  }
  
  type ArtThing {
    _id: ID!
    title: String!
    description: String
    date: Date
    image: String
  }
`;

module.exports = typeDefs;
