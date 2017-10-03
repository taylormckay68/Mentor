require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

console.log(process.env.TEST)

app.listen(3000, () => {
    console.log(`Listening on port 3000`);
})