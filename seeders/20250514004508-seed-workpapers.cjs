'use strict';
const { v4: uuidv4 } = require('uuid');

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('workpapers', [
      {
        workpaperId: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 1,
        publishedAt: new Date(),
        publishedBy: 1,
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
        createdBy: 2,           // Bob
        publishedAt: new Date(),
        publishedBy: 2,
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
        createdBy: 1,
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
    await queryInterface.bulkDelete('workpapers', {
      name: [
        'BAS 2025 Q1',
        'FBT 2025',
        'Compliance - Year End 2024'
      ]
    });
  }
};
