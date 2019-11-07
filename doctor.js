const express = require("express");
const app = express();
const port = 4000;

app.get("/doctor", (req, res) => {
  const doc = req.query.doc || "Dr.";
  const name = req.query.name || "Who";
  const doctor = `${doc} ${name}`;
  res.send(doctor);
});
app.listen(port, () => console.log(`Listening on port ${port}`));
