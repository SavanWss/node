import express from "express";

import adminCollection from "../../Models/admin.js";
import userCollection from "../../Models/users.js";

import { createJwt } from "../../Services/WebTokens/jsonWebToken.js";

const loginRouter = new express.Router();

loginRouter.post("/Auth/v2/lgn/an", async (request, response) => {
    console.log("successfully redirect");

    try {
        const userEmail = request.body.email
        const userPassword = request.body.password

// console.log("");
        // password length verification
        if (userPassword.length === 0) {
            response.status(400).send({
                status: "failed",
                error: "password is required"
            })
            return
        }


        // email verification
        if (userEmail.trim().length === 0) {
            response.status(400).send({
                status: "failed",
                error: "email is required"
            })
            return
        }

        // user existance validation
        const existanceUser = await adminCollection.find({ email: userEmail })

        console.log(existanceUser);


        if (existanceUser.length === 0) {
            response.status(400).send({
                status: "failed",
                error: "user doesn't exist"
            })
            return
        }

        // password verification
        if (existanceUser[0]["password"] !== userPassword) {
            response.status(400).send({
                status: "failed",
                error: "Wrong Credential"
            })
            return
        }

        // otp status updation to Expired
        // await otpCollection.updateMany({ mobile: { $eq: otpNumber } }, { $set: { "status": "Expired" } })

        // // generate the otp 
        // let generatedOtp = generateOtp(6, true, false, false, false)

        // // create the otp data to save otp in db
        // let otpData = new otpCollection({
        //     mobile: otpNumber,
        //     otp: generatedOtp,
        //     purpose: otpPurpose
        // })


        // retrieve the configuration of arihant sms service for sending the sms
        /*
                   const apiKey = process.env.SMS_API_KEY
                   const clientId = process.env.SMS_CLIENT_ID
                   const senderId = process.env.SMS_SENDER_ID
           
                   const sms = await otpSender(otpNumber,generatedOtp,apiKey,clientId,senderId)
                   
                   console.log("sended sms detail ===>", sms.data);
                   console.log("sms.data.Data[0].MessageErrorCode === ",sms.data.Data[0].MessageErrorCode);
                   console.log("sms.data.ErrorCode === ",sms.data.ErrorCode);
           
                   if(sms.data.Data[0].MessageErrorCode !== 0 || sms.data.ErrorCode !== 0) {
                       response.satus(401).send({
                           status : "failed",
                           error: "unknown error to send the otp"
                       })
                   }
        */

        // const savedOtpData = await otpData.save()

        console.log("otp sended successfully");

        var jwToken

        try {
            jwToken = await createJwt(userEmail)
            console.log(jwToken);
        } catch (error) {
            console.log(error);
        }

    try {
        let res = await adminCollection.updateMany({ "email": { $eq: userEmail } }, { $set: { "flag": "1" } })
        console.log("res == ", res);
        console.log("flag is updated");
    } catch (error) {
        console.log("flag is not updated", error);
    }

        response.status(200).send({
            status: "success",
            msg: "otp sucsessfully sended on sms",
            nsToken: jwToken

        })

    } catch (error) {
        response.status(400).send({
            status: "failed",
            error: error
        })
    }

    // response.redirect("http://localhost/")
})

// user login
loginRouter.post("/Auth/v2/lgn/user", async (request, response) => {
    console.log("successfully redirect");

    try {
        const userEmail = request.body.email
        const userPassword = request.body.password

// console.log("");
        // password length verification
        if (userPassword.length === 0) {
            response.status(400).send({
                status: "failed",
                error: "password is required"
            })
            return
        }


        // email verification
        if (userEmail.trim().length === 0) {
            response.status(400).send({
                status: "failed",
                error: "email is required"
            })
            return
        }

        // user existance validation
        const existanceUser = await userCollection.find({ email: userEmail })

        console.log("existed user == ", existanceUser);


        if (existanceUser.length === 0) {
            response.status(400).send({
                status: "failed",
                error: "user doesn't exist"
            })
            return
        }

        // password verification
        if (existanceUser[0]["password"] !== userPassword) {
            response.status(400).send({
                status: "failed",
                error: "Wrong Credential"
            })
            return
        }



    console.log("otp sended successfully");


        response.status(200).send({
            status: "success",
            msg: "loggedin successfully",
            body: existanceUser[0]
        })

    } catch (error) {
        response.status(400).send({
            status: "failed",
            error: error
        })
    }

    // response.redirect("http://localhost/")
})

export default loginRouter