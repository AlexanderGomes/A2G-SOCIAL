const express = require('express')
require("dotenv").config();
const multer = require("multer");
const port = process.env.PORT || 6000
const app = express()
const connectDB = require('./dbConnect/index')
const path = require("path");




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/images", express.static(path.join(__dirname, "public/images")));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "/public/images"))
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({storage})

app.post("/upload", upload.single("file"), (req, res) => {
    if(req.body.userId) {
    try {
        return res.status(200).json("file uploaded")
    } catch (error) {
        console.log(error)
    }
}
})


app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/goals', require('./routes/postRoutes'));




app.listen(port, async () => {
    await connectDB();
console.log(`server on  port ${port}`)
})