const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');
const niveis = require('./niveisRoute');
const turmas = require('./turmasRoute')

const routeDefault = '/api';

module.exports = app => {
    app.use(bodyParser.json());
    app.get('/', (req, res) => {
        return res.status(200).json({
            message: "API ORM Sequelize v0.0.1"
        })
    });

    app.use(routeDefault, pessoas);
    app.use(routeDefault, niveis);
    app.use(routeDefault, turmas);
}