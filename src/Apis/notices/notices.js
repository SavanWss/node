import express, { request, response } from "express";
import noticeCollection from "../../Models/notice.js";

const noticeRouter = express.Router()


// add notice api

noticeRouter.post("/notice/add", async (request, response) => {
    try {
        
        const noticeDetailsJson = request.body
        
        console.log("noticeDetailsJson === ", noticeDetailsJson);

        const noticeData = new noticeCollection(noticeDetailsJson)

        let enteredData;
        try {
            enteredData = await noticeData.save()
    
            response.status(201).send({
                status: "success",
                body: enteredData
            })
    
        } catch (error) {
            response.status(401).send({
                status: "failed",
                error: error
            })
        }
        

    } catch (error) {
        response.status(400).send({
            status: "failed",
            error: error
        })
    }
})

// get all notices

noticeRouter.get("/notices", async (request, response) => {
    try {
        
        const existanceUser = await noticeCollection.find()

        response.status(200).send({
            status: "success",
            data: existanceUser
        })

    } catch (error) {
        response.status(400).send({
            status: "failed",
            error: error
        })
    }
})



export default noticeRouter