import express from 'express'
import { shortUrl , reDirect } from '../controllers/urlShort.controller.js';
const router=express.Router();
router.post("/add", shortUrl)
router.get("/:shortID" , reDirect)
export default router