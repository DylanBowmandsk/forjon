const fs = require("fs");
const csv = fs.readFileSync("interactions.csv", 'utf8')
var cors = require('cors')

const express = require('express')
const app = express()
const port = 3001
app.use(cors())

app.get('/', (req, res) => {

    var json = csv.split("\n").slice(1).map((element, index) => {
        element = element.split(",")
        return {sectorid : element[0],
        name: element[1],
        date: element[2]}
    })
    
  res.send(json)
})

app.listen(port, () => {
  console.log("API running")
})