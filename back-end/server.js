
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import {connectDB} from './config/db.js'
import {errorHandler} from './middleware/errorHandler.js'
import {router as userRouter} from './routes/userRoutes.js'
dotenv.config()

//connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const PORT = process.env.PORT || 5000

app.get('/', (req, res) =>{
   res.send('hello')
})

app.use('/api/users', userRouter)

app.use(errorHandler)

app.listen(PORT, ()=>{
   console.log(`Server is running on PORT ${PORT} `);
})




