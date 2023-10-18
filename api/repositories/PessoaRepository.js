const database = require('../models');

class PessoaRepository {
    static async findAll() {
       return await database.Pessoas.findAll();
    }

    static async findById(id) {
        return await database.Pessoas.findOne({ where: {
            id: Number(id)
        }}) 
    }

    static async created(person) {
        return await database.Pessoas.create(person);
     }
}

module.exports = PessoaRepository