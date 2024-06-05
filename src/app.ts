import express from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();

// client url
const client = `http://localhost:${process.env.CLIENT_PORT || 3000}`;

// middlewares
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: client, credentials: true }));

// routes (add your routes here)

export default app;
