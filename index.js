"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = express_1["default"]();
app.get('/hello', function (_req, res) {
    res.send('Hello Full Stack!');
});
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Server running on port " + PORT);
});
