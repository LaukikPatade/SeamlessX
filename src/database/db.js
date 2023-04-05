const mongoose=require("mongoose")
let conn=null
module.exports=connectDatabase=async()=>{
    if(conn==null){
        console.log("Creating new connection")
        await mongoose.connect("mongodb+srv://laukik2210:XOp0u5I4G4sODa1K@cluster0.jfqmg.mongodb.net/awsDB",{
            serverSelectionTimeoutMS:1000,
        })
        return conn;
    }
    console.log("Connection already established")
}