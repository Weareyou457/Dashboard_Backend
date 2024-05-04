const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const TechPackSchema = new mongoose.Schema({
    style: {
        type: String,
        max: 50,
        required: true,
    },
    category: {
        type: String,
        max: 50,
        required: true,

    },
    collectionss: {
        type: String,
        max: 50,
        required: true,

    },
    pdf: {
        type:String,
        
      }
})

module.exports = mongoose.model("techpack", TechPackSchema)