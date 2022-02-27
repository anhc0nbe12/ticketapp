import asyncHandler from 'express-async-handler'


const registerUser = asyncHandler( async (req, res) => {
   const {name, email, password} = req.body
   if(!name || !email || !password){
      res.status(400)
      throw new Error('please fill all field')
   }
   res.json({message:'register user'})
}) 

const loginUser = asyncHandler( async (req, res) => {
   res.json({message:'login user'})
})

export {
   registerUser,
   loginUser
}