import express from "express";
import testFunction from "../controller/testController.js";

const testRouter = express.Router();

testRouter.get("/myTest", testFunction);
export default testRouter;
