const express = require("express")
const cors = require("cors")
const app = express()
const port = 8080
const guitarRouter = require("./routers/guitarRouters")


app.use(cors())
app.use(express.json())
app.use("/", guitarRouter)

app.listen(port, function() {
    console.log('app started');
  });