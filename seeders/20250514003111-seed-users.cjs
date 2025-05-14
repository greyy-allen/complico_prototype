'use strict';
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const [firms] = await queryInterface.sequelize.query(`
      SELECT "firmId", "name"
      FROM "firms"
      ORDER BY "createdAt"
    `);

    const firmAdVin = firms.find(f => f.name === 'Ad Vin Accounting Pty Ltd');
    const firmShelby = firms.find(f => f.name === 'Shelby Brothers Unlimited Pty Ltd');

    if (!firmAdVin || !firmShelby) {
      throw new Error('Required firms not found. Run firm seeder first.');
    }

    await queryInterface.bulkInsert ('users', [
      {
        userId: uuidv4(),
        firstName: 'Thomas',
        lastName: 'Shelby',
        username: 'shelbythomas',
        email: 'shelbythomas@shelby.com',
        password: await bcrypt.hash('password123', 10),
        firmId: firmShelby.firmId,
        createdAt: new Date(),
      },
      {
        userId: uuidv4(),
        firstName: 'Bruce',
        lastName: 'Wayne',
        username: 'batman',
        email: 'manisbat@jusleague.com',
        password: await bcrypt.hash('password123', 10),
        firmId: firmAdVin.firmId,
        createdAt: new Date(),
      }
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
