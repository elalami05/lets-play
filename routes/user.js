const express=require('express');
const router= express.Router();
const USER=require('../controlleurs/user');
const {protect, isAdmin}=require('../midlewhere/auth');
router.route('')
.get(USER.GetAllusers);
router.route('/:id')
    .put(USER.updateSingleUser)
    .delete(USER.deleteSingleUser)






module.exports=router;