const mongoose =require('mongoose')
const Schema=mongoose.Schema

const offerSchema= new Schema({
    ShopName: String,
    Address: String,
    Category: String,
    City: String,
    EndDate: String,
    GetDirectionUrl: String,
    Latitude: String,
    Longitude: String,
    Locality: String,
    OfferDescription1: String,
    OfferDescription2: String,
    OfferIndex:String,
    PaymentMode: String,
    StartDate: String,
    Store: String,
    SubCategory: String,
    
    

})


module.exports= mongoose.model('Offer',offerSchema)