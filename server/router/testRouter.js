import express from "express";
import testFunction from "../controller/testController.js";
// import { getAllUsers } from "../controller/fetchusersController.js";

const testRouter = express.Router();

testRouter.get("/myTest", testFunction);
// testRouter.get("/Usertest", getAllUsers);
export default testRouter;
