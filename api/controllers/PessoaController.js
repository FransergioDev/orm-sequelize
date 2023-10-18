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

    static async findById(req, res) {
        const { id } = req.params;

        try {
            const person = await repository.findById(id);
            return res.status(200).json(person);  
        } catch (error) {
            return res.status(500).json(error.message);  
        }
    }

    static async created(req, res) {
        const person = req.body;

        try {
            const newPerson = await repository.created(person);
            return res.status(200).json(newPerson);   
        } catch (error) {
            return res.status(500).json(error.message);  
        }
    }
}

module.exports = PessoaController