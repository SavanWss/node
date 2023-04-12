import mongoose from "mongoose";

const departmentsSchema = new mongoose.Schema({
    department_name: {
        type: String,
        maxLength: 50,
        required: true,
        trim: true
    },
    head_doctor: {
        type: String,
        maxLength: 50,
        required: true,
        trim: true
    },
    email: {
        type: String,
        minLegth: 6,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        minLength: 10,
        maxLength: 10,
        required: true,
        trim: true
    },
    discription: {
        type: String,
        minLength: 5,
        maxLength: 25000,
        required: true,
        trim: true
    }
})


const departmentsCollection = new mongoose.model("departments",departmentsSchema)

export default departmentsCollection