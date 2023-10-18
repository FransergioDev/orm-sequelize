const database = require('../models');

class NivelRepository {
    static async findAll() {
       return await database.Niveis.findAll();
    }

    static async findById(id) {
        return await database.Niveis.findOne({ where: {
            id: Number(id)
        }}) 
    }

    static async created(nivel) {
        return await database.Niveis.create(nivel);
    }

    static async update(id, data) {
        return await database.Niveis.update(data, { where: {
            id: Number(id)
        }}) 
    }

    static async delete(id) {
        return await database.Niveis.destroy({ where: {
            id: Number(id)
        }}) 
    }
}

module.exports = NivelRepository