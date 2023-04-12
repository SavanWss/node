import express from "express";

import path from "path"

const siteRouter = new express.Router()

siteRouter.get("/", (request,response) => {
    response.sendFile("C:/Users/Harpal/Desktop/01 Final Code/HMSBack/public/index.html")
})

siteRouter.get("/js", (request,response) => {
    response.redirect("")
})

export default siteRouter