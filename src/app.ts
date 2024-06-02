import express from "express";
import helmet from "helmet";
import xssFilters from "xss-filters";

const app = express();

// middlewares
app.use(helmet());
app.use((req, res, next) => {
  req.body = xssFilters.inHTMLData(req.body);
  next();
});
app.use(express.json());

export default app;
