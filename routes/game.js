const express=require('express');
const router=express.Router();
const {win,lost}=require('../controlleurs/game');

router.route('/win')
    .put(win)
router.route('/lost')
    .put(lost)


module.exports=router;
