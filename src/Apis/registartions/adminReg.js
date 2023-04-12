import express from "express"
import adminCollection from "../../Models/admin.js"

const adminRegRouter = new express.Router()

adminRegRouter.post("/Auth/v2/reg/adm", async (request, response) => {

  try {
    const firstName = request.body.firstName
    const lastName = request.body.lastName
    const password = request.body.password
    const mobile = request.body.mobile
    const email = request.body.email

    const adminData = new adminCollection({
        firstName: firstName,
        lastName: lastName,
        password: password,
        mobile: mobile,
        email: email,
        flag: "0"
    })

    let enteredData;
    try {
        enteredData = await adminData.save()

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

export default adminRegRouter