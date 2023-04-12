import express from "express"
import nurseCollection from "../../Models/nurse.js"

const nrsListRouter = new express.Router()

nrsListRouter.get("/get/nrs/list", async (request, response) => {
    try {
        
        const existanceUser = await nurseCollection.find()

        console.log(existanceUser);
        response.status(200).send({statis:"success", data:existanceUser})

    } catch (error) {
        response.status(401).send({statis:"failed", error:error})
    }
})

export default nrsListRouter