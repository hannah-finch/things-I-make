const typeDefs = `#graphql
scalar Date

  type Query {
    artThings: [ArtThing]
  }

  type Mutation {
    createArtThing (title: String, description: String, date: Date, image: String): ArtThing
    createCraftThing (title: String, description: String, date: Date, image: String): CraftThing
  }
  
  type ArtThing {
    _id: ID!
    title: String
    description: String
    date: Date
    image: String
  }

  type CraftThing {
    _id: ID!
    title: String
    description: String
    date: Date
    image: String
  }
`;

module.exports = typeDefs;
