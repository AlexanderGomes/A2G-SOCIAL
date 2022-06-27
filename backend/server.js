const express = require('express')
require("dotenv").config();
const port = process.env.PORT || 6000
const app = express()
const connectDB = require('./dbConnect/index')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/posts', require('./routes/postRoutes'));


app.listen(port, async () => {
    await connectDB();
console.log(`server on  port ${port}`)
})