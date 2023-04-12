import express from "express"
import userCollection from "../../Models/users.js"

const userRegRouter = new express.Router()

userRegRouter.post("/Auth/v2/reg/usr", async (request, response) => {
console.log(request.body);
  try {
    const firstName = request.body.firstName
    const lastName = request.body.lastName
    const password = request.body.password
    const dob = new Date(request.body.dob)
    const mobile = request.body.mobile
    const email = request.body.email
    const address = request.body.address
    const city = request.body.city
    const pincode = request.body.pincode


    const userData = new userCollection({
        firstName: firstName,
        lastName: lastName,
        password: password,
        mobile: mobile,
        email: email,
        dob: dob,
        address: address,
        city: city,
        pincode: pincode,
    })

    let enteredData;
  
    try {
        enteredData = await userData.save()
        console.log("entered data", enteredData);
        response.status(201).send({
            status: "success",
            body: enteredData
        })

    } catch (error) {
      console.log("your error is ", error);
        response.status(401).send({
            status: "failed",
            error: error
        })
    }

  } catch (error) {
    console.log("your error is ", error);
    response.status(401).send({
        status: "failed",
        error: error
    })
  }


})

export default userRegRouter