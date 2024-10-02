const { Schema, model } = require("mongoose");

const devThingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    required: true,
  },
  tech: [
    {
      type: String,
    },
  ],
  collaborators: [
    {
      type: String,
    },
  ],
  github: {
    type: String,
  },
  deployed: {
    type: String,
  },
  video: {
    type: String,
  },
});

module.exports = devThingSchema;
