const database = require('../models');

class PessoaRepository {
    static async findAll () {
        console.log("aqui")
       return await database.Pessoas.findAll();
    }
}

module.exports = PessoaRepository