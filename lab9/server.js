'use strict';
const express = require('express');
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();
app.get('/', (req, res) => {
res.send('Hello World');
});
app.get("/api", (req, res) => {
res.json({ message: "Hello from server!" });
});
app.listen(PORT, HOST);
console.log(`Running on
http://${HOST}:${PORT}`
);