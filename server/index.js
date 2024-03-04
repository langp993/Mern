import express from "express";
import cors from "cors";
// import userRouter from "/Routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log("Server is running on port !!! " + port);
});

// app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
