const {Router, application}=require('express');
const router=Router();
const {deleteInfo,updateInfo, generador1,getdatos_extra,getgenerador_1,getgenerador_2, getGenerador1ById, getGenerador2ById,getDatosExtrasById}=require('../controllers/index.controller')
const cors=require('cors')


//routeamos las funciones al index.js

router.get('/generador_1',cors(),getgenerador_1);
router.get('/generador_2',cors(),getgenerador_2);
router.get('/datos_extras',cors(),getdatos_extra);
router.get('/generador_1/:id',cors(),getGenerador1ById)
router.get('/generador_2/:id',cors(),getGenerador2ById)
router.get('/datosExtras/:id',cors(),getDatosExtrasById)
router.post('/info',cors(),generador1);



module.exports=router;