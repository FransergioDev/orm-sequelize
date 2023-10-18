const database = require('../models');

class MatriculaRepository {
    static async findAll() {
       return await database.Matriculas.findAll();
    }

    static async findById(id) {
        return await database.Matriculas.findOne({ where: {
            id: Number(id)
        }}) 
    }

    static async findAllByIdStudent(student_id) {
        return await database.Matriculas.findAll({ where: {
            estudante_id: Number(student_id)
        }}) 
    }

    static async findByIdAndByStudent(id, student_id) {
        return await database.Matriculas.findOne({ where: {
            id: Number(id),
            estudante_id: Number(student_id)
        }}) 
    }

    static async created(person) {
        return await database.Matriculas.create(person);
    }

    static async update(id, student_id, data) {
        return await database.Matriculas.update(data, { where: {
            id: Number(id),
            estudante_id: Number(student_id)
        }}) 
    }

    static async delete(id, student_id) {
        return await database.Matriculas.destroy({ where: {
            id: Number(id),
            estudante_id: Number(student_id)
        }}) 
    }
}

module.exports = MatriculaRepository