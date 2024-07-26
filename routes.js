const express = require('express')
const customerHandler =require('./app/handlers/customer.handler');
const especieHandler =require('./app/handlers/especies');
const florHandler =require('./app/handlers/flores');
const jardinHandler =require('./app/handlers/jardines');
const variedadHandler =require('./app/handlers/variedades');

const router = express.Router();



router.get('/customers', customerHandler.listCustomer)
router.post('/customers', customerHandler.insertCustomer)
router.patch('/customers/:id', customerHandler.updateCustomer)
router.delete('/customers/:id', customerHandler.deleteCustomer)

router.get('/especies', especieHandler.listEspecies);
router.post('/especies', especieHandler.insertEspecie);
router.patch('/especies/:id', especieHandler.updateEspecie);
router.delete('/especies/:id', especieHandler.deleteEspecie);

router.get('/flores', florHandler.listFlores);
router.post('/flores', florHandler.insertFlor);
router.patch('/flores/:id', florHandler.updateFlor);
router.delete('/flores/:id', florHandler.deleteFlor);

router.get('/jardines', jardinHandler.listJardines);
router.post('/jardines', jardinHandler.insertJardin);
router.patch('/jardines/:id', jardinHandler.updateJardin);
router.delete('/jardines/:id', jardinHandler.deleteJardin);


router.get('/variedades', variedadHandler.listVariedades);
router.post('/variedades', variedadHandler.insertVariedad);
router.patch('/variedades/:id', variedadHandler.updateVariedad);
router.delete('/variedades/:id', variedadHandler.deleteVariedad);

module.exports = router;