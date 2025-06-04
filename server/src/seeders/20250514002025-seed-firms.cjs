'use strict';
const { v4: uuidv4 } = require('uuid');

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const firm1Id = uuidv4();
    const firm2Id = uuidv4();
    const firm3Id = uuidv4();
    const firm4Id = uuidv4();

    await queryInterface.bulkInsert('firms', [
      {
        firmId: firm1Id,
        shortId: 'ADV001',
        name: 'Ad Vin Accounting Pty Ltd',
        createdAt: new Date(),
      },
      {
        firmId: firm2Id,
        shortId: 'SHL002',
        name: 'Shelby Brothers Unlimited Pty Ltd',
        createdAt: new Date(),
      },
      {
        firmId: firm3Id,
        shortId: 'STK003',
        name: 'Stark Industries',
        createdAt: new Date(),
      },
      {
        firmId: firm4Id,
        shortId: 'WYN004',
        name: 'Wayne Enterprises',
        createdAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('firms', null, {});
  },
};
