const express = require("express")
const connection = require('./connection/Connection')
const router = require('./routes/Routes')
const app = express()
const cors = require('cors')
// connection();
app.use(express.json())
app.use(cors())
app.use(router)
















app.listen(4000, () => {
    console.log('server running on port 4000')
})

