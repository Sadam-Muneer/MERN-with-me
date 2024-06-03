import mongoose from "mongoose";
import express from "express";
import DB_Name from "./src/constants";
const app = express()(async () => {
  try {
    await mongoose
      .connect(`${process.env.MONGODB_URL}/${DB_Name}`)
      .app.on("error", (error) => {
        console.log("ERROR", error);
        throw Error;
      });
    app.listen(process.env.PORT, () => {
      console.log("The application is running on port", process.env.PORT);
    });
  } catch (error) {
    console.log(error);
  }
})();
