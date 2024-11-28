require('dotenv').config()
const express = require('express')
const bookRoutes=require('./routes/bookRoutes')
const authorRoutes=require('./routes/authorRoutes')
const personRoutes=require('./routes/personRoutes')
const userRoutes=require('./routes/userRoutes')
const authRoutes=require('./routes/authRoutes')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const port = 3000


app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE","OPTIONS"]
}));
app.use(express.json())
app.use(cookieParser())
app.use('/books',bookRoutes)
app.use('/authors',authorRoutes)
app.use('/persons',personRoutes)
app.use('/users',userRoutes)
app.use('/auth',authRoutes)
    
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
main().then(()=>console.log("connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);
}