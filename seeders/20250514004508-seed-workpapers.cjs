'use strict';
const { v4: uuidv4 } = require('uuid');

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const [users] = await queryInterface.sequelize.query(`
      SELECT "userId", "email"
      FROM "users"
    `);

    const shelby = users.find(u => u.email === 'shelbythomas@shelby.com');
    const bruce = users.find(u => u.email === 'manisbat@jusleague.com');

    if (!shelby || !bruce) {
      throw new Error('Required users not found. Run user seeder first.');
    }

    await queryInterface.bulkInsert('workpapers', [
      {
        workpaperId: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: shelby.userId,
        publishedAt: new Date(),
        publishedBy: shelby.userId,
        region: ['australia'],
        name: 'BAS 2025 Q1',
        description: 'Quarterly BAS workpaper template',
        tags: ['bas', 'gst'],
        workpaperType: ['bas'],
        entityType: ['company']
      },
      {
        workpaperId: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: bruce.userId,
        publishedAt: new Date(),
        publishedBy: bruce.userId,
        region: ['newZealand'],
        name: 'FBT 2025',
        description: 'Fringe benefits tax workpaper',
        tags: ['fbt'],
        workpaperType: ['fbt'],
        entityType: ['company', 'trust'],
      },
      {
        workpaperId: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: shelby.userId,
        region: ['australia', 'unitedKingdom'],
        name: 'Compliance – Year End 2024',
        description: 'General year-end compliance checklist.',
        tags: ['compliance', 'yearEnd'],
        workpaperType: ['compliance'],
        entityType: ['partnership', 'company'],
      }
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('workpapers', null, {});
  }
};
