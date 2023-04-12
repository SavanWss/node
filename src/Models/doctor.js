import mongoose from "mongoose";

const doctorCollectionSchema = new mongoose.Schema({
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

    department: {
        type: String,
        required: true,
    },

    designation: {
        type: String,
        required: true,
    },
    
    salary: {
        type: String,
        required: true,
    }, 
    
    specialist: {
        type: String,
        minLegth: 6,
        required: true,
        unique: true
    },
    
    address: {
        type: String,
        unique: true,
        required: true,
    },
})

const doctorCollection = new mongoose.model("doctor",doctorCollectionSchema)

export default doctorCollection