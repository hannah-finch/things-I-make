const { Schema, model } = require("mongoose");

const devThingSchema = new Schema({
  title: {
    type: String,
    default: "Untitled"
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
    default: "https://images.pexels.com/photos/3888149/pexels-photo-3888149.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  video: {
    type: String,
  },
  tech: [
    {
      type: String,
    },
  ],
  collab: [
    {
      type: String,
    },
  ],
  github: {
    type: String,
    default: "https://github.com/hannah-finch"
  },
  deployed: {
    type: String,
  },

});

const DevThing = model("DevThing", devThingSchema);

module.exports = DevThing;
