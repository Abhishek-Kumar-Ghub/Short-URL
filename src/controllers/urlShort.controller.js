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
 export {shortUrl};
