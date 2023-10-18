const bodyParser = require('body-parser');
const pessoas = require('./pessoasRouter');

const routeDefault = '/api';

module.exports = app => {
    app.use(bodyParser.json());
    app.get('/', (req, res) => {
        return res.status(200).json({
            message: "API ORM Sequelize v0.0.1"
        })
    });

    app.use(routeDefault, pessoas);
}