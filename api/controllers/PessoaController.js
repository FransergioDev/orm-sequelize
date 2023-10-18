const repository = require('../repositories/PessoaRepository');
const repositoryMatricula = require('../repositories/MatriculaRepository');

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

    static async update(req, res) {
        const { id } = req.params;
        const data = req.body;

        try {
            await repository.update(id, data);
            const personWithDataUpdate = await repository.findById(id);
            return res.status(200).json(personWithDataUpdate);   
        } catch (error) {
            return res.status(500).json(error.message);  
        }
    }

    static async delete(req, res) {
        const { id } = req.params;

        try {
            await repository.delete(id);
            return res.status(200).json({
                message: `O registro do ID: ${id} foi deletado com sucesso!`
            });  
        } catch (error) {
            return res.status(500).json(error.message);  
        }
    }
    

    static async listAllRegistrationByPersonId(req, res) {
        const { estudante_id } = req.params;

        try {
            const registrations = await repositoryMatricula.findAllByIdStudent(estudante_id);
            return res.status(200).json(registrations);            
        } catch (error) {
            return res.status(500).json(error.message);   
        }
    }

    static async findByIdRegistrationAndByPersonId(req, res) {
        const { estudante_id, matricula_id } = req.params;

        try {
            const registration = await repositoryMatricula.findByIdAndByStudent(estudante_id, matricula_id);
            return res.status(200).json(registration);            
        } catch (error) {
            return res.status(500).json(error.message);   
        }
    }

    static async createdRegistration(req, res) {
        const { estudante_id } = req.params;
        const data = { ...req.body, estudante_id: Number(estudante_id)};

        try {
            const newRegistration = await repositoryMatricula.created(data);
            return res.status(200).json(newRegistration);            
        } catch (error) {
            return res.status(500).json(error.message);   
        }
    }

    static async updateRegistration(req, res) {
        const { estudante_id, matricula_id } = req.params;
        const data = { ...req.body, estudante_id: Number(estudante_id)};

        try {
            await repositoryMatricula.update(matricula_id, estudante_id, data);
            const registration = await repositoryMatricula.findByIdAndByStudent(estudante_id, matricula_id);
            return res.status(200).json(registration);                 
        } catch (error) {
            return res.status(500).json(error.message);   
        }
    }

    static async deleteRegistration(req, res) {
        const { estudante_id, matricula_id } = req.params;
        
        try {
            await repositoryMatricula.delete(matricula_id, estudante_id);
            return res.status(200).json({
                message: `O registro do ID: ${id} foi deletado com sucesso!`
            });                
        } catch (error) {
            return res.status(500).json(error.message);   
        }
    }
}

module.exports = PessoaController