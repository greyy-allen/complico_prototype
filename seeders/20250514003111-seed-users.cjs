'use strict';
const bcrypt = require('bcrypt');

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert ('users', [
      {
        userId: 1,
        firstName: 'Thomas',
        lastName: 'Shelby',
        username: 'shelbythomas',
        email: 'shelbythomas@shelby.com',
        password: await bcrypt.hash('password123', 10),
        firmId: 1,
        createdAt: new Date()
      },
      {
        userId: 2,
        firstName: 'Bruce',
        lastName: 'Wayne',
        username: 'batman',
        email: 'manisbat@jusleague.com',
        password: await bcrypt.hash('password123', 10),
        firmId: 2,
        createdAt: new Date()
      }
    ]);
  },

  /*
  async down (queryInterface) {
    await queryInterface.bulkDelete('users', {
      userId: { [queryInterface.sequelize.Op.in]: [1,2] }
    });
  }
    */
  async down(q) {
    await q.bulkDelete('users', null, {});
  }
};
