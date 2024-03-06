import { Usermodel } from "../model/Users.js";

const testFunction = async (req, res) => {
  console.log("testing....");
  const allUsers = await Usermodel.find();
  console.log("allUsers", allUsers);

  res.status(200).json({
    number: allUsers.length,
    message: "all users",
    allUsers,
  });
};
export default testFunction;
