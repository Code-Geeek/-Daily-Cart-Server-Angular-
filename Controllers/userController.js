const users = require('../Models/userModel')

// register
exports.registerController = async (req,res)=>{
    const {username,email,password}=req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("Account already exists...Please login!")
        }else{
            const newUSer = new users({
                username,email,password
            })
            await newUSer.save()
            res.status(200).json(newUSer)
        }
    }catch(err){
        res.status(401).json(err)
    }
}