const Item = require("./model/Items.js"); // Create the Item model

app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// userControllers

// import { UserModel } from "../models/userModel.js";

// export const getUsers = async (req, res) => {
//   try {
//     const allUsers = await UserModel.find();
//     res.status(200).json(allUsers);
//   } catch (e) {
//     console.log(e);
//   }
// };
