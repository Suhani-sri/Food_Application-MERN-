import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js"

const app = express();
dotenv.config({path: "./config/config.env"})

app.use( // jo bhi cheeze as a middleware use krna chahte h wo .use me likhte h
    cors({ 
    origin: [process.env.FRONTEND_URL], // origin mean frontend ka path dena h jisse ap connect krna chahthe ho, you can add multiple url here to add multiple frontend 
    methods: ["POST"], //which methods you want to use in your backend and frontend
    credentials: true
}))

app.use(express.json()) // ye string ko json object me convert kr dega
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/reservation', reservationRouter)

dbConnection();

app.use(errorMiddleware);


export default app;