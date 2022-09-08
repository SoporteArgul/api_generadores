const {Router, application}=require('express');
const router=Router();
const { getInfo,createInfo }=require('../controllers/index.controller')

router.get('/info',getInfo);
router.post('/info',createInfo);

module.exports=router;