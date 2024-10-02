const { Schema, model } = require("mongoose");

const musicThingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  lyrics: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
  },
});

module.exports = musicThingSchema;
