"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, "./config.env") });
console.log("##### Connecting to the Database... #####");
mongoose_1.default
    .connect(process.env.DB)
    .then(() => {
    const server = http_1.default.createServer();
    const port = process.env.PORT || 8080;
    server.listen(port, () => {
        console.log(`Database connected and Server is currently running on port ${port} 🚀`);
    });
})
    .catch(() => {
    console.log({
        message: "Error connecting to the database",
        reasons: "Check if you properly wired your config.env file in the root of your directory" +
            "Also check if you provided a valid database connection string",
    });
});
