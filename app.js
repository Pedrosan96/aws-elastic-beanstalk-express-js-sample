const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! My name is Pedro and this is my first example in AWS but it doesnt let me modify the files'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
