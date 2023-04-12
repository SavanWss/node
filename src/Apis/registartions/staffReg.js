import express from "express"
import staffCollection from "../../Models/staff.js"

const staffRegRouter = new express.Router()

staffRegRouter.post("/Auth/v2/reg/stf", async (request, response) => {

  try {
    const firstName = request.body.firstName
    const lastName = request.body.lastName
    const password = request.body.password
    const mobile = request.body.mobile
    const email = request.body.email
    const role = request.body.role

    const staffData = new staffCollection({
        firstName: firstName,
        lastName: lastName,
        password: password,
        mobile: mobile,
        email: email,
        role: role
    })

    let enteredData;
    try {
        enteredData = await staffData.save()

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
    response.status(401).send({
        status: "failed",
        error: error
    })
  }


})

export default staffRegRouter