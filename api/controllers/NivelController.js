const repository = require('../repositories/NivelRepository');

class NivelController {
    static async index (req, res) {
        try {
            const niveis = await repository.findAll();
            return res.status(200).json(niveis);            
        } catch (error) {
            return res.status(500).json(error.message);   
        }
    }

    static async findById(req, res) {
        const { id } = req.params;

        try {
            const nivel = await repository.findById(id);
            return res.status(200).json(nivel);  
        } catch (error) {
            return res.status(500).json(error.message);  
        }
    }

    static async created(req, res) {
        const nivel = req.body;

        try {
            const newNivel = await repository.created(nivel);
            return res.status(200).json(newNivel);   
        } catch (error) {
            return res.status(500).json(error.message);  
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const data = req.body;

        try {
            await repository.update(id, data);
            const nivelWithDataUpdate = await repository.findById(id);
            return res.status(200).json(nivelWithDataUpdate);   
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

module.exports = NivelController