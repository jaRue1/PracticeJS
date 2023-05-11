const data = require("./data.json")
const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

const port = 3001

app.get("/hello", (req, res) => {
  res.send("Hello World!")
})
// RESTful
app.get("/data", (req, res) => {
  res.send(data)
})
// RESTful GET /data/:id
app.get("/data/:id", (req, res) => {
  const id = req.params.id
  console.log(req.params)
  const item = data.find((item) => item.id === Number(id))

  res.send(item)
})

//  RESTful POST /data
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
