// const Item = require("./model/Items.js"); // Create the Item model

// app.get("/api/items", async (req, res) => {
//   try {
//     const items = await Item.find();
//     res.json(items);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error");
//   }
// });

//////////////////////////

// userControllers

// import { UserModel } from "../model/Items.js";

// export const getAllUsers = async (req, res) => {
//   try {
//     const allUsers = await UserModel.find();
//     res.status(200).json(allUsers);
//   } catch {
//     res.status(404).json({ message: error.message });
//   }
// };

////////////////////////

import { UserModel } from "../model/Users.js";

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.status(200).json(allUsers);
  } catch {
    res.status(404).json({ message: error.message });
  }
};
export default getAllUsers;
