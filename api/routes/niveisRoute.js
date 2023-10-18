const { Router } = require('express');
const NivelController = require('../controllers/NivelController');

const router = Router();

router.get('/niveis', NivelController.index);
router.post('/niveis', NivelController.created);
router.get('/niveis/:id', NivelController.findById);
router.put('/niveis/:id', NivelController.update);
router.delete('/niveis/:id', NivelController.delete);

module.exports = router;