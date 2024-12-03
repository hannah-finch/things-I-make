const typeDefs = `#graphql
scalar Date

  type Query {
    artThings: [ArtThing]
    craftThings: [CraftThing]
    designThings: [DesignThing]
    devThings: [DevThing]
    musicThings: [MusicThing]
  }

  type Mutation {
    createArtThing (title: String, description: String, date: Date, image: String): ArtThing
    createCraftThing (title: String, description: String, date: Date, image: String): CraftThing
    createDesignThing (title: String, description: String, date: Date, image: String): DesignThing
    createDevThing (title: String, description: String, date: Date, image: String, video: String, tech: [String], collab: [String], github: String, deployed: String): DevThing
    createMusicThing (title: String, lyrics: String, date: Date, image: String, cover: Boolean, file: String): MusicThing
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

    type DesignThing {
    _id: ID!
    title: String
    description: String
    date: Date
    image: String
  }

    type DevThing {
    _id: ID!
    title: String
    description: String
    date: Date
    image: String
    video: String
    tech: [String]
    collab: [String]
    github: String
    deployed: String
  }

    type MusicThing {
    _id: ID!
    title: String
    lyrics: String
    date: Date
    image: String
    cover: Boolean
    file: String
  }
`;

module.exports = typeDefs;
