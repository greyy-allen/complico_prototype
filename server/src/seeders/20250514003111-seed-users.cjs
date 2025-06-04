'use strict';
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const [firms] = await queryInterface.sequelize.query(`
      SELECT "firmId", "name"
      FROM "firms"
      ORDER BY "createdAt"
    `);

    const firmAdVin = firms.find(f => f.name === 'Ad Vin Accounting Pty Ltd');
    const firmShelby = firms.find(f => f.name === 'Shelby Brothers Unlimited Pty Ltd');
    const firmStark = firms.find(f => f.name === 'Stark Industries');
    const firmWayne = firms.find(f => f.name === 'Wayne Enterprises');

    if (!firmAdVin || !firmShelby || !firmStark || !firmWayne) {
      throw new Error('Required firms not found. Run firm seeder first.');
    }

    await queryInterface.bulkInsert('users', [
      {
        userId: uuidv4(),
        firstName: 'Thomas',
        lastName: 'Shelby',
        username: 'shelbythomas',
        email: 'shelbythomas@shelby.com',
        password: await bcrypt.hash('password123', 10),
        firmId: firmShelby.firmId,
        type: 'vendor',
        createdAt: new Date(),
      },
      {
        userId: uuidv4(),
        firstName: 'Bruce',
        lastName: 'Wayne',
        username: 'batman',
        email: 'manisbat@jusleague.com',
        password: await bcrypt.hash('password123', 10),
        firmId: firmWayne.firmId,
        type: 'customer',
        createdAt: new Date(),
      },
      {
        userId: uuidv4(),
        firstName: 'Tony',
        lastName: 'Stark',
        username: 'ironman',
        email: 'ironman@starkindustries.com',
        password: await bcrypt.hash('password123', 10),
        firmId: firmStark.firmId,
        type: 'vendor',
        createdAt: new Date(),
      },
      {
        userId: uuidv4(),
        firstName: 'Vincent',
        lastName: 'Adams',
        username: 'vinadams',
        email: 'vin.adams@advaccounting.com',
        password: await bcrypt.hash('password123', 10),
        firmId: firmAdVin.firmId,
        type: 'customer',
        createdAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
