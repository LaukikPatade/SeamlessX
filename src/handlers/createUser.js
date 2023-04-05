const connectDatabase=require('../database/db')
const User=require('../models/user')
module.exports.handler=async(event,context)=>{
    context.callbackWaitForEmptyEventLoop=false
    try {
        await connectDatabase()
        const {name,email,password}=JSON.parse(event.body)
        const user=await User.create({
            name,email,password
        })
    
    return{
        statusCode:201,
        body:JSON.stringify(user)
    }
    } catch (error) {
        console.log(error);
        return{
            statusCode:error.statusCode||500,
            body:JSON.stringify({error:error.message})
        }
    }
    // try {
    //     return{
    //                 statusCode:201,
    //                 body:JSON.stringify({event})
    //             }
    //     // await connectDatabase()
    //     // console.log(event)
    //     // const {email,password}=JSON.parse(event.body)
    //     // const user=await User.findOne({email})
    //     // if(user===null) throw new Error("User does'nt exist",401)
    //     // bcrypt.compare(password,user.password).then((res)=>{
    //     //     if(res){
    //     //     return{
    //     //         statusCode:201,
    //     //         body:JSON.stringify("Logged in")
    //     //     }
    //     // }
    //     //     else{
    //     //         throw new Error("Wrong Password",401)
    //     //     }
    //     // })
        
    // }
    // catch (error) {
    //     console.log(error);
    //     return{
    //         statusCode:error.statusCode||500,
    //         body:JSON.stringify({error:error.message})
    //     }
    // }
}