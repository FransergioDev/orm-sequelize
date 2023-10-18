const repository = require('../repositories/PessoaRepository');

class PessoaController {
    static async index (req, res) {
        try {
            const people = await repository.findAll();
            return res.status(200).json(people);            
        } catch (error) {
            return res.status(500).json(error.message);   
        }
    }
}

module.exports = PessoaController