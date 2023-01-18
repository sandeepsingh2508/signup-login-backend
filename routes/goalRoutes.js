const express=require('express')
const {getApi, postApi,putApi} = require('../controller/goal')
const router=express.Router()


router.use(express.json())

router.get('/',getApi)
router.post('/',postApi)
router.put('/:id',putApi)


module.exports=router;
    
