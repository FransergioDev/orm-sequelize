const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.index);
router.post('/pessoas', PessoaController.created);
router.get('/pessoas/:id', PessoaController.findById);
router.put('/pessoas/:id', PessoaController.update);
router.delete('/pessoas/:id', PessoaController.delete);

router.get('/pessoas/:estudante_id/matriculas', PessoaController.listAllRegistrationByPersonId);
router.post('/pessoas/:estudante_id/matriculas', PessoaController.createdRegistration);
router.get('/pessoas/:estudante_id/matriculas/:matricula_id', PessoaController.findByIdRegistrationAndByPersonId);
router.put('/pessoas/:estudante_id/matriculas/:matricula_id', PessoaController.updateRegistration);
router.delete('/pessoas/:estudante_id/matriculas/:matricula_id', PessoaController.deleteRegistration);


module.exports = router;