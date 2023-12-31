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

    static async update(id, data) {
        return await database.Pessoas.update(data, { where: {
            id: Number(id)
        }}) 
    }

    static async delete(id) {
        return await database.Pessoas.destroy({ where: {
            id: Number(id)
        }}) 
    }
}

module.exports = PessoaRepository