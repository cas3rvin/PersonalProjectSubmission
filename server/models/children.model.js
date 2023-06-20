const mongoose = require("mongoose");

const ChildrenSchema = {
    name: {
        type: String,
        required: [true, "Name missing!"],
        minLength: [2, "Name must be at least 2 characters"],
    },
    age: {
        type: Number,
        required: [true, "Age missing!"],
        // minLength: [1, "Must be a number greater than 0"],
    },
    hobbies: {
        type: String,
        required: [true, "Missing Hobbies!"],
    },
    date: {
        type: String,
        default: Date(),
        required: [true, "Missing Date!"]
    },

    room: {
        type: Number,
        required: [true, "Room number missing!"],
        // min: [3, "Numbers must be greater than 3"],
        integer: true,
    },
};

module.exports = mongoose.model("Children", ChildrenSchema);