import mongoose from "mongoose";

const adminCollectionSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minLength: 2,
        maxLength: 25,
        required: true,
        trim: true
    },
    
    lastName: {
        type: String,
        minLength: 2,
        maxLength: 25,
        required: true,
        trim: true      
    },

    flag: {
        type: String,
        minLength: 1,
        maxLength: 1,
        required: true,
        trim: true,
        default: "0"
    },

    password: {
        type: String,
        minLegth: 6,
        required: true
    },

    mobile: {
        type: String,
        minLegth: 10,
        maxLength: 10,
        required: true,
        unique: true
    },

    email: {
        type: String,
        minLegth: 6,
        required: true,
        unique: true
    },
})

const adminCollection = new mongoose.model("admin",adminCollectionSchema)

export default adminCollection