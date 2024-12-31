import express from "express";

const clientRouter = express.Router();

import { register, getClients } from "../controllers/clientController.js";
console.log("in routes - clients");

clientRouter.post("/register", register);
clientRouter.get("/clients", getClients);

export default clientRouter;
