const {
  ArtThing,
  CraftThing,
  DesignThing,
  DevThing,
  MusicThing,
} = require("../models");

const dateScalar = require("./scalars/DateScalar")

const resolvers = {
  Date: dateScalar,
  Query: {
    artThings: async (_) => {
      const artThings = await ArtThing.find();
      return artThings;
    },
  },

  Mutation: {
    createArtThing: async (_, input) => {
      const artThing = await ArtThing.create(input);
      return artThing;
    },
  },
};

module.exports = resolvers;
