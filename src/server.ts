// importing core packages
import mongoose from "mongoose";
import http from "http";
import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({ path: resolve(__dirname, "../config.env") });

// importing 3rd party package
import app from "./app";

mongoose
  .connect(process.env.DB!)
  .then(() => {
    const server = http.createServer(app);
    const port = process.env.PORT || 8080;

    // kicking the server
    server.listen(port, () => {
      console.log(`Server is currently running on port ${port} 🚀`);
    });
  })
  .catch(() => {
    console.log("Error connecting to the database ==>", process.env.DB!);
  });
