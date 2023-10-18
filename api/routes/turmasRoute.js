const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');

const router = Router();

router.get('/turmas', TurmaController.index);
router.post('/turmas', TurmaController.created);
router.get('/turmas/:id', TurmaController.findById);
router.put('/turmas/:id', TurmaController.update);
router.delete('/turmas/:id', TurmaController.delete);

module.exports = router;