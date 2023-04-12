import jwt from "jsonwebtoken"


// function for creating the json web token
const createJwt = async (unique_id) => {
    // creating the json web token
    const jsnToken = await jwt.sign({email_id: unique_id},"LenKey@321", {
        //expiresIn: "10h" // it will be expired after 10 hours
        //expiresIn: "20d" // it will be expired after 20 days
        //expiresIn: 120 // it will be expired after 120ms
        expiresIn: "120s" // it will be expired after 120s
 });
    return jsnToken
}

// function for verify the json web token
const verifyJwt = async (web_token) => {
    // verifying the json web token
    try {

        const verificationFlag = await jwt.verify(web_token, "LenKey@321")
        return verificationFlag

    } catch (error) {
        return false
    }
}

export { createJwt, verifyJwt }