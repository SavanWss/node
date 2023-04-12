import express from "express"
import departmentsCollection from "../../Models/departments.js"

const departmentsRouter = express.Router()

departmentsRouter.post("/departments/add", async (request, response) => {


    try {
        
        const departmentsDetailsJson = request.body

        const departmentsData = new departmentsCollection(departmentsDetailsJson)

        console.log("departmentsDetailsJson === ", departmentsDetailsJson);

        let enteredData;
        try {
            enteredData = await departmentsData.save()
    
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
            status: "false",
            error: error
        })
    }


})


// get all notices

departmentsRouter.get("/departments", async (request, response) => {
    try {
        
        const existanceUser = await departmentsCollection.find()

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

export default departmentsRouter