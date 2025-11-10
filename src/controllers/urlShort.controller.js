import Url from '../models/test.js'
import {nanoid} from 'nanoid'

const shortUrl=async(req,res)=>{
try{
const{OriginalURL}=req.body;
if(!OriginalURL){
return res.status(400).json({message:"URL not found"})
}

let shortId=nanoid(6)
const newUrl=await Url.create({ShortID:shortId, OriginalURL})
const shortUrll = `${process.env.BASE_URL.replace(/\/+$/, "")}/${shortId}`;
res.status(201).json({
      ShortID: shortId,
      shortUrll,
      OriginalURL: OriginalURL,
    });

}catch(error){
console.error("error occured")
res.status(500).json({message:error.message})
}
}

const reDirect=async(req,res)=>{
try{
const {shortID}= req.params;
const redirect=await Url.findOne({ShortID: shortID })
if(!redirect){
  return res.status(404).json({message:"URL not found"})
}

redirect.Clicks+=1;

redirect.lastAccess=Date.now()
 await redirect.save();

console.log(redirect)
// res.status(200).json({message:"successful", redirect})
res.redirect(redirect.OriginalURL)

}
catch(error){
console.error(error.message)
res.status(500).json({message:error.message})
}
}
 export {shortUrl , reDirect};
