const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    state: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    village: {
      type: String,
    },
    khata: {
      type: Number,
      required: true,
    },
    survey: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Formdata", formSchema);
