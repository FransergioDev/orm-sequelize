const database = require('../models');

class TurmaRepository {
    static async findAll() {
       return await database.Turmas.findAll();
    }

    static async findById(id) {
        return await database.Turmas.findOne({ where: {
            id: Number(id)
        }}) 
    }

    static async created(person) {
        return await database.Turmas.create(person);
    }

    static async update(id, data) {
        return await database.Turmas.update(data, { where: {
            id: Number(id)
        }}) 
    }

    static async delete(id) {
        return await database.Turmas.destroy({ where: {
            id: Number(id)
        }}) 
    }
}

module.exports = TurmaRepository