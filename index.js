import connectDB from "./src/db/database.js";
import { app } from "./src/app.js";
import dotenv from "dotenv";
dotenv.config();
app();
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running at ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
