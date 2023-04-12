import express from "express"
import multer from "multer"
import cors from "cors"


import docRegApi from "./Apis/registartions/doctorReg.js"
import adminRegApi from "./Apis/registartions/adminReg.js"
import userRegApi from "./Apis/registartions/userReg.js"
import staffRegApi from "./Apis/registartions/staffReg.js"
import siteRouter from "./Apis/site/site.js"

import docListRouter from "./Apis/getStaffList/getDocList.js"

import loginApi from "./Apis/login/login.js"
import nurseRegRouter from "./Apis/registartions/nurseReg.js"
import nrsListRouter from "./Apis/getStaffList/getNurseList.js"
import noticeRouter from "./Apis/notices/notices.js"
import departmentsRouter from "./Apis/departments/departments.js"


// configuration of multer
const upload = multer()
// configuration server express
const app = express()


const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))

// configuration of accepting body parser for json
app.use(express.json())
// configuration of accepting body parser for form-data
app.use(upload.any())
// configuration of accepting body parser of x-www-form-urlencoded
app.use(express.urlencoded(
    {extended: true}
))

app.use(express.static('public'))
app.use(docRegApi)
app.use(nurseRegRouter)
app.use(adminRegApi)
app.use(userRegApi)
app.use(staffRegApi)
app.use(siteRouter)

app.use(noticeRouter)
app.use(departmentsRouter)

app.use(docListRouter)
app.use(nrsListRouter)

app.use(loginApi)




// creating the node server
app.listen(80, () => {
    console.log("node server is started");
    console.log(`on port number 80`);
})