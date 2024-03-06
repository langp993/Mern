const testFunction = async (req, res) => {
  console.log("testing....");
  res.status(200).json({
    message: "testing routes",
  });
};
export default testFunction;
