import mongoose from "mongoose";

const staffCollectionSchema = new mongoose.Schema({
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

    role: {
        type: String,
        minLegth: 6,
        required: true,
        unique: true,
        enum: ["nurse","recep","cleaner"]
    },
})

const staffCollection = new mongoose.model("staff",staffCollectionSchema)

export default staffCollection