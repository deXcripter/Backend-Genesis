import express from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();

// variables for the client
const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
const client = `${protocol}://localhost:${process.env.CLIENT_PORT || 3000}`;

// middlewares
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: client, credentials: true }));

// routes (add your routes here)

export default app;
