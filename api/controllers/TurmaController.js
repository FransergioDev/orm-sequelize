const repository = require('../repositories/TurmaRepository');

class TurmaController {
    static async index (req, res) {
        try {
            const classes = await repository.findAll();
            return res.status(200).json(classes);            
        } catch (error) {
            return res.status(500).json(error.message);   
        }
    }

    static async findById(req, res) {
        const { id } = req.params;

        try {
            const classrom = await repository.findById(id);
            return res.status(200).json(classrom);  
        } catch (error) {
            return res.status(500).json(error.message);  
        }
    }

    static async created(req, res) {
        const classrom = req.body;

        try {
            const newClassrom = await repository.created(classrom);
            return res.status(200).json(newClassrom);   
        } catch (error) {
            return res.status(500).json(error.message);  
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const data = req.body;

        try {
            await repository.update(id, data);
            const classromWithDataUpdate = await repository.findById(id);
            return res.status(200).json(classromWithDataUpdate);   
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
}

module.exports = TurmaController