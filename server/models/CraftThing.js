const { Schema, model } = require("mongoose");

const craftThingSchema = new Schema({
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
});

module.exports = craftThingSchema;
