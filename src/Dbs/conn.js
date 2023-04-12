import mongoose from "mongoose";

mongoose.connect("mongodb+srv://HMS:Har%40321Mod@hms.e8nyw8o.mongodb.net/HMS").then(() => {
    console.log("db connected successfully");
}).catch((e) => {
    console.log("db connection failure",e);
})