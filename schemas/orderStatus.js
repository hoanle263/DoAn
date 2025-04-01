let mongoose = require("mongoose");
let orderStatusSchema = mongoose.Schema(
  {
    tenTrangThai: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },  
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("orderStatus", orderStatusSchema);
