const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const db = require("./config/db")
const {router} = require("./routes/routes.js")

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.use(router)
app.listen(port, () => {
  console.log('Example app listening at http://localhost:'+port)
})