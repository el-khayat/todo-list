const express = require("express");
const app = express();


app.use(express.json());


app.get("/", (req, res) => {
  res.send("welcome");
});


const PORT = 3334 ;
// start server
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT} . . .`);
});
