const mongoose=require('mongoose')
const connectDatabase=require('../database/db')
const Offer=require('../models/offer')
const axios=require('axios')

module.exports.handler=async(event,context)=>{
    context.callbackWaitForEmptyEventLoop=false
    let response;
    await connectDatabase()
        try{
            response = await Offer.find()
            return{
                statusCode:201,
                body:JSON.stringify({
                    result:response
                })
            }
            
        }catch(err){
            console.log(err)
        }
   
    
    

       

        
        

}