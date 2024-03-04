import express from "express";
var userRouter = express.Router();

userRouter.get("/test", (req, res) => {
  res.send("User Route Test");
});

export default userRouter;
