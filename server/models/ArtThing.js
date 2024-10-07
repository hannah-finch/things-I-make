const { Schema, model } = require("mongoose");

const artThingSchema = new Schema({
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
    default: "https://images.pexels.com/photos/9176035/pexels-photo-9176035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
});

const ArtThing = model("ArtThing", artThingSchema);

module.exports = ArtThing;
