const express = require("express");
require("../server/database/conn");
const router = require("./router/std")
const app = express();
const port = 8000;
const cors = require("cors");
const morgan = require("morgan");

app.use(express.json());
app.use(router)
app.use(cors());
app.use(morgan('tiny'));
// less hackers know about my stack
app.disable('x-powered-by');


app.get('/', (req, res) => {
    res.status(201).json("home GET Request");
});


app.listen(port, () => {
    console.log(`Server connected to http://localhost:${port}`);
})
