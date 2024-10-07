const {
  ArtThing,
  CraftThing,
  DesignThing,
  DevThing,
  MusicThing,
} = require("../models");

const dateScalar = require("./scalars/DateScalar");

const resolvers = {
  Date: dateScalar,
  Query: {
    artThings: async (_) => {
      const artThings = await ArtThing.find();
      return artThings;
    },
    craftThings: async (_) => {
      const craftThings = await CraftThing.find();
      return craftThings;
    },
    designThings: async (_) => {
      const designThings = await DesignThing.find();
      return designThings;
    },
    devThings: async (_) => {
      const devThings = await DevThing.find();
      return devThings;
    },
    musicThings: async (_) => {
      const musicThings = await MusicThing.find();
      return musicThings;
    },
  },

  Mutation: {
    createArtThing: async (_, { title, description, date, image }) => {
      const artThing = await ArtThing.create({
        title: title,
        description: description,
        date: date,
        image: image,
      });
      return artThing;
    },
    createCraftThing: async (_, { title, description, date, image }) => {
      const craftThing = await CraftThing.create({
        title: title,
        description: description,
        date: date,
        image: image,
      });
      return craftThing;
    },
    createDesignThing: async (_, { title, description, date, image }) => {
      const designThing = await DesignThing.create({
        title: title,
        description: description,
        date: date,
        image: image,
      });
      return designThing;
    },
    createDevThing: async (
      _,
      { title, description, date, image, video, tech, collab, github, deployed }
    ) => {
      const devThing = await DevThing.create({
        title: title,
        description: description,
        date: date,
        image: image,
        video: video,
        tech: tech,
        collab: collab,
        github: github,
        deployed: deployed,
      });
      return devThing;
    },
    createMusicThing: async (_, { title, lyrics, date, image, cover }) => {
      const musicThing = await MusicThing.create({
        title: title,
        lyrics: lyrics,
        date: date,
        image: image,
        cover: cover,
      });
      return musicThing;
    },
  },
};

module.exports = resolvers;
