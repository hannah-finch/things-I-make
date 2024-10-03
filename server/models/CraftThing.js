const { Schema, model } = require("mongoose");

const craftThingSchema = new Schema({
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
    default: "https://images.pexels.com/photos/7218942/pexels-photo-7218942.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
});

const CraftThing = model("CraftThing", craftThingSchema);

module.exports = CraftThing;
