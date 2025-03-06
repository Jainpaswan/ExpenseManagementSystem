const express=require('express')
const { addTransection, getAllTransection } = require('../controllers/transectionCtrl')


const router=express.Router()

//add Transection
router.post('/add-transection',addTransection)
router.post('/get-transection',getAllTransection)

module.exports=router