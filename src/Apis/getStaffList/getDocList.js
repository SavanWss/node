import express from "express"
import doctorCollection from "../../Models/doctor.js"

const docListRouter = new express.Router()

docListRouter.get("/get/dc/list", async (request, response) => {
    try {
        
        const existanceUser = await doctorCollection.find()

        console.log(existanceUser);
        response.status(200).send({statis:"success", data:existanceUser})

    } catch (error) {
        response.status(401).send({statis:"failed", error:error})
    }
})

export default docListRouter