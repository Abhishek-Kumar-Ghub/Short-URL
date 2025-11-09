import mongoose from 'mongoose';
const urlSchema=new mongoose.Schema({
OriginalURL:{
    type:String,
    required:true,
},

ShortID:{
    type:String,
    required:true,
    unique:true,
},
Clicks:{
    type:Number,
    default:0,
}
},{timestamps:true})

const Url=mongoose.model("Url", urlSchema);
export default Url;