"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const xss_filters_1 = __importDefault(require("xss-filters"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((req, res, next) => {
    req.body = xss_filters_1.default.inHTMLData(req.body);
    next();
});
app.use(express_1.default.json());
exports.default = app;
