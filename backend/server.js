const express = require('express')
const port = process.env.PORT || 6000
const app = express()




app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(port, console.log(`server on  port ${port}`))