const { Schema, model } = require("mongoose");

const designThingSchema = new Schema({
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
    default: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
});

const DesignThing = model("DesignThing", designThingSchema);

module.exports = DesignThing;
