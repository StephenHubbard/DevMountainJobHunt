require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());
app.use(express.static('./'))


app.listen(process.env.PORT || 5000, () => {
    console.log("Listening on port 5000")
})