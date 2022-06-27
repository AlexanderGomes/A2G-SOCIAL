const mongoose = require('mongoose')

const connectDB = async () => {
   mongoose.connect(process.env.MONGO__URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   console.log('mongodb connected')
 
}

module.exports = connectDB;