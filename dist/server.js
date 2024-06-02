"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = require("path");
dotenv_1.default.config({ path: (0, path_1.resolve)(__dirname, "../config.env") });
const app_1 = __importDefault(require("./app"));
mongoose_1.default
    .connect(process.env.DB)
    .then(() => {
    const server = http_1.default.createServer(app_1.default);
    const port = process.env.PORT || 8080;
    server.listen(port, () => {
        console.log(`Server is currently running on port ${port} 🚀`);
    });
})
    .catch(() => {
    console.log("Error connecting to the database ==>", process.env.DB);
});
