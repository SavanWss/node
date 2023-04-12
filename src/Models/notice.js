import mongoose from "mongoose"

const noticeCollectionSchema = mongoose.Schema({
    notice_title: {
        type: String,
        minLength: 5,
        maxLength: 250,
        required: true,
        trim: true
    },
    notice_description: {
        type: String,
        minLength: 5,
        maxLength: 25000,
        required: true,
        trim: true
    },
    notice_start_date: {
        type: String,
        required: true,
        trim: true
    },
    notice_end_date: {
        type: String,
        required: true,
        trim: true
    },
})

const noticeCollection = new mongoose.model("notices", noticeCollectionSchema)

export default noticeCollection