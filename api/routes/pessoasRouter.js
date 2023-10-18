const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.index);
router.post('/pessoas', PessoaController.created);
router.get('/pessoas/:id', PessoaController.findById);

module.exports = router;