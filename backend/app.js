require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());

app.use("/", require('./src/routes/users'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});