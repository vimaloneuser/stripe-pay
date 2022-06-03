const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const router = require("./router");

app.use("/",router);

app.listen(port, () => [
    console.log(`server is listening on http://localhost:5000/`)
]);