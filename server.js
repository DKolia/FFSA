const express = require ("express");
const app = express();

app.get("/", (req, res) => res.send("App is working"))








app.listen(3000, () => {
  console.log("Server is on port 3000");
});
