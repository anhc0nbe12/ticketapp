import mongoose from "mongoose"

export const connectDB = async() =>{
   try {
      const conn = await mongoose.connect(process.env.MONGODB_URI)
      console.log(`Database connected ${conn.connection.host}`.cyan.underline)
   } catch (error) {
      console.log(`Error: ${error.message}`.red.underline.bold)
      process.exit(1)
   }
}