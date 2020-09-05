//Akshay
const Promise = require("bluebird"); //used to make our prog async
const mysql = require("mysql");
const cors = require("cors"); //used for cross platform
const express = require("express"); //used to make url

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const app = express();
app.use(cors());
app.use(express.json()); // BODY :: RAW :: JSON

let dbadduser = require("./db.add.user");
let forgetpassword = require("./forget.password");

app.post("/adduser", async (req, res) => {
  try {
    const input = req.body;
    await dbadduser.addUser(input);

    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: "failure" });
  }
});
app.post("/auth-user", async (req, res) => {
  try {
    const input = req.body;
    await dbadduser.authenticateUser(input);

    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: "failure" });
  }
});
app.post("/userforgetpass", async (req, res) => {
  try {
    const input = req.body;
    await forgetpassword.forgetPass(input);

    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: "failure" });
  }
});
app.post("/addTask", async (req, res) => {
  try {
    const input = req.body; // before doing this
    await ntask.addnewtask(input);

    res.json({ message: "success post" });
  } catch (err) {
    res.json({ message: "failure post" });
  }
});
app.listen(3050);
