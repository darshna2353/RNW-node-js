const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const con = await mongoose.connect( `mongodb+srv://darshna:darshna22@darshna.m3xlz.mongodb.net//api` );
    console.log(`mongodb successfully connect`);
  } catch (err) {
    console.error(err); 
    return false;
  }
};
module.exports = connectDB;


