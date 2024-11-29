const { Schema, model } = require("mongoose");

const musicThingSchema = new Schema({
  title: {
    type: String,
    default: "Untitled",
  },
  lyrics: {
    type: String,
    default: "Lyrics unavailable",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    default: "https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  cover: {
    type: Boolean,
    default: false,
  },
  file: {
    type: String,
    default: "File missing",
  }
});

const MusicThing = model("MusicThing", musicThingSchema);

module.exports = MusicThing;
