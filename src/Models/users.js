import mongoose from "mongoose";

const userCollectionSchema = new mongoose.Schema({
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

    dob: {
        type: Date,
        required: true
    },

    address: {
        type: String,
        minLegth: 7,
        required: true,
        unique: true
    },

    city: {
        type: String,
        minLegth: 2,
        required: true,
        unique: true
    },

    pincode: {
        type: String,
        minLegth: 6,
        maxLength: 6,
        required: true,
        unique: true
    },
})

const userCollection = new mongoose.model("user",userCollectionSchema)

export default userCollection