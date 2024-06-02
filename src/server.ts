import mongoose from "mongoose";
import http from "http";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "./config.env") });

console.log("##### Connecting to the Database... #####");
mongoose
  .connect(process.env.DB!)
  .then(() => {
    const server = http.createServer();
    const port = process.env.PORT || 8080;

    // kicking the server
    server.listen(port, () => {
      console.log(
        `Database connected and Server is currently running on port ${port} 🚀`
      );
    });
  })
  .catch(() => {
    console.log({
      message: "Error connecting to the database",
      reasons:
        "Check if you properly wired your config.env file in the root of your directory" +
        "Also check if you provided a valid database connection string",
    });
  });
