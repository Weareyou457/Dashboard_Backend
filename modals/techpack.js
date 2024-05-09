const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TechPackSchema = new Schema({
    Style: {
        type: String,
        unique: true, // Ensure uniqueness
        maxlength: 50, // Maximum length
        required: true // Required field
    },
    category: {
        type: String,
        maxlength: 50,
        required: true
    },
    collectionss: {
        type: String,
        maxlength: 50,
        required: true
    },
    pdf: {
        type: String
    }
});

// Create a unique index on the Style field
TechPackSchema.index({ Style: 1 }, { unique: true });

module.exports = mongoose.model("TechPack", TechPackSchema);
