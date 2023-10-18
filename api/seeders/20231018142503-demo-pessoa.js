'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'John Doe',
        ativo: true,
        email: 'john.d@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Marcos Citra',
        ativo: true,
        email: 'marcosc@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'João Carlos',
        ativo: true,
        email: 'marcosc@gmail.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Ana Lima',
        ativo: true,
        email: 'ana.lima@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Karla Silva',
        ativo: true,
        email: 'karlasn@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pessoas', null, {});
  }
};
