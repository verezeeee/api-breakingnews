const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Wait connecting to database");

  mongoose.set('strictQuery', false)
  mongoose
    .connect(
      "mongodb+srv://theusma58:131344@cluster0.lf86gdn.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas  Connected"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
