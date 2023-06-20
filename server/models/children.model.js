const mongoose = require("mongoose");

const ChildrenSchema = {
    name: {
        type: String,
        required: [true, "Name missing!"],
        minLength: [2, "Name must be at least 2 characters"],
    },
    birthdate: {
        type: String,
        default: Date(),
        required: [true, "Missing D.O.B.!"],
    },
    age: {
        type: Number,
        required: [true, "Age missing!"],
        // minLength: [1, "Must be a number greater than 0"],
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

    country: {
        type: String,
        required: [true, "Missing C.O.B.!"],
    },

    hobbies: {
        type: String,
        required: [true, "Missing Hobbies!"],
    },

    music: {
        type: String,
        required: [true, "Missing Music!"],
    },
    sport: {
        type: String,
        required: [true, "Missing Sport Activity!"],
    },

    food: {
        type: String,
        required: [true, "Missing Favorite Food!"],
    },

    tv: {
        type: String,
        required: [true, "Missing Favorite Movies/TV shows!"],
    },


    // activitydate: {
    //     type: String,
    //     default: Date(),
    //     required: [true, "Missing Date!"],
        
    // },
    // type: {
    //     type: String,
    //     required: [true, "Activity Type missing!"],
    //     // minLength: [1, "Must be a number greater than 0"],
    // },
    // duration: {
    //     type: String,
    //     required: [true, "Missing Duration!"],
    // },
    // location: {
    //     type: String,
    //     required: [true, "Activity Location missing!"],
    // },

    // initials: {
    //     type: String,
    //     required: [true, "Staff Initials!"],
    // },
};

module.exports = mongoose.model("Children", ChildrenSchema);