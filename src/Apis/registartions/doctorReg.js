import express from "express"
import doctorCollection from "../../Models/doctor.js"

const docRegRouter = new express.Router()

docRegRouter.post("/Auth/v2/reg/dc", async (request, response) => {
console.log("request gated");
  try {
    const firstName = request.body.firstName
    const lastName = request.body.lastName
    
    const password = request.body.password
    const mobile = request.body.mobile
    const email = request.body.email
    const department = request.body.department
    const designation = request.body.designation
    const salary = request.body.salary
    const specialist = request.body.specialist
    const address = request.body.address
    const gender = request.body.gender
    

    const docData = new doctorCollection({
      firstName: firstName,
      lastName: lastName,
      password: password,
      mobile: mobile,
      email: email,
      department: department,
      designation: designation,
      salary: salary,
      specialist: specialist,
      address: address,
      gender: gender,
    })
  
    let enteredData;
    try {
     
      enteredData = await docData.save()
     
      response.status(201).send({
        status: "success",
        body: enteredData
      })

    } catch (error) {
    console.log(error);
      response.status(400).send({
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

export default docRegRouter