import express from 'express'
import { shortUrl } from '../controllers/urlShort.controller.js';
const router=express.Router();
router.post("/add", shortUrl)
// router.post("")
export default router