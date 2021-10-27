const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors')
app.use(cors()) 

const PlayerRouter = require("./src/playerRouter")


app.use(express.json())
app.use("/player", PlayerRouter)


  



app.listen(port, function() {
    console.log('app started...');
});
