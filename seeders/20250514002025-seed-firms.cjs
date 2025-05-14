'use strict';

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('firms',[
      {
        firmId: 1,
        name: 'Ad Vin Accounting Pty Ltd',
        createdAt: new Date()
      },
      {
        firmId: 2,
        name: 'Shelby Brothers Unlimited Pty Ltd',
        createdAt: new Date()
      }
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('firms',{
      firmId: [ 1, 2]
    });
  }
};
