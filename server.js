const express = require("express");
const path = require("path")
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname , "/index.html"));
});

app.post("/register", (req, res) => {
  const {email,password} = req.body;

  console.log("email:",email);
  console.log("password:",password);

  if(email==="israel@svcollege.co.il" && password==="1234"){
      res.send("✅ Login successful! Welcome!");
 }else{
    res.send("invaild email or password");
 }
});

app.listen(port, () => {
  console.log(` Server running at http://localhost:${port}`);
});