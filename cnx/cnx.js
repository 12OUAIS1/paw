const mongoose = require("mongoose");
const cnx = async(req,res) =>{
try {
    await mongoose.connect("mongodb+srv://ouais:ouais1234@cluster0.ray39fi.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("connected");});
} catch (error) {
    res.status(400).json({message: "not connected"});
}
};
cnx();