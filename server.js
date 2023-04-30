const express = require('express')
const app = express()
const port = 8000

const cors=require('cors')
const userRoutes=require('./routes/userRoutes')



app.use(express.json())
app.use(cors())

app.use("/api",userRoutes)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))