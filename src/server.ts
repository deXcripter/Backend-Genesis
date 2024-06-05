import http from "http";
import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({ path: resolve(__dirname, "../config.env") });

import app from "./app";
import databaseConnection from "./utils/database-connection";

const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

server.listen(PORT, async () => {
  await databaseConnection(process.env.DB as string); // passing the connection string into the function
  console.log(`Server is running on port ${PORT}`);
});
