const express=require('express')
const { addTransection, getAllTransection, editTransection,deleteTransection, } = require('../controllers/transectionCtrl')


const router=express.Router()

//add Transection
router.post('/add-transection',addTransection)
//Edit transection POST MEthod
router.post("/edit-transection", editTransection);
//Delete transection POST MEthod
router.post("/delete-transection", deleteTransection);
//Get Transection GET METHOD
router.post('/get-transection',getAllTransection)

module.exports=router