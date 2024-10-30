const express = require('express');
const {getbalance,transfermoney}=require("../controller/accountcontroller")
const {authMiddleware}=require("../middleware")
const router = express.Router();

router.get("/balance",authMiddleware,getbalance)
router.post("/transfer",authMiddleware,transfermoney)


module.exports = router;