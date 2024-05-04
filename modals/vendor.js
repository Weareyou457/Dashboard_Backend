const mongoose=require("mongoose")

const VendorSchema = new mongoose.Schema({
    name: {
        type: String,
        max: 50,
        required: true,
    },
    contact: {
        type: String,
        max: 50,
        required: true,
        
    },
    performance: {
        type: String,
        max: 50,
        required: true,
       
    },
    rating: {
        type: String,
        max: 50,
        required: true,
    }
})

module.exports = mongoose.model("vendor", VendorSchema)