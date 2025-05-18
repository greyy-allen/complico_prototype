'use strict';
const { v4: uuidv4 } = require('uuid');

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const [users] = await queryInterface.sequelize.query(`
      SELECT "userId", "email"
      FROM "users"
    `);

    const shelby = users.find(u => u.email === 'shelbythomas@shelby.com');

    if (!shelby) {
      throw new Error('Shelby user not found. Run user seeder first.');
    }

    const now = new Date();

    await queryInterface.bulkInsert('workpapers', [
      {
        workpaperId: uuidv4(),
        createdAt: now,
        updatedAt: now,
        createdBy: shelby.userId,
        publishedAt: now,
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
        createdAt: now,
        updatedAt: now,
        createdBy: shelby.userId,
        publishedAt: now,
        publishedBy: shelby.userId,
        region: ['newZealand'],
        name: 'FBT 2025',
        description: 'Fringe benefits tax workpaper',
        tags: ['fbt'],
        workpaperType: ['fbt'],
        entityType: ['company', 'trust']
      },
      {
        workpaperId: uuidv4(),
        createdAt: now,
        updatedAt: now,
        createdBy: shelby.userId,
        region: ['australia', 'unitedKingdom'],
        name: 'Compliance – Year End 2024',
        description: 'General year-end compliance checklist.',
        tags: ['compliance', 'yearEnd'],
        workpaperType: ['compliance'],
        entityType: ['partnership', 'company']
      },
      {
        workpaperId: uuidv4(),
        createdAt: now,
        updatedAt: now,
        createdBy: shelby.userId,
        publishedAt: now,
        publishedBy: shelby.userId,
        region: ['australia'],
        name: 'GST Annual Report 2025',
        description: 'Annual GST filing template',
        tags: ['gst'],
        workpaperType: ['gst'],
        entityType: ['company']
      },
      {
        workpaperId: uuidv4(),
        createdAt: now,
        updatedAt: now,
        createdBy: shelby.userId,
        publishedAt: now,
        publishedBy: shelby.userId,
        region: ['unitedKingdom'],
        name: 'UK Corporation Tax 2025',
        description: 'UK CT600 template for tax submissions',
        tags: ['tax', 'uk'],
        workpaperType: ['corporationTax'],
        entityType: ['company']
      },
      {
        workpaperId: uuidv4(),
        createdAt: now,
        updatedAt: now,
        createdBy: shelby.userId,
        publishedAt: now,
        publishedBy: shelby.userId,
        region: ['australia'],
        name: 'Trust Distribution 2025',
        description: 'Workpaper for trust distribution schedules',
        tags: ['trust', 'distribution'],
        workpaperType: ['trustDistribution'],
        entityType: ['trust']
      },
      {
        workpaperId: uuidv4(),
        createdAt: now,
        updatedAt: now,
        createdBy: shelby.userId,
        publishedAt: now,
        publishedBy: shelby.userId,
        region: ['newZealand'],
        name: 'NZ GST Return Q1 2025',
        description: 'Quarterly GST return workpaper for NZ',
        tags: ['gst', 'nz'],
        workpaperType: ['gst'],
        entityType: ['company']
      },
      {
        workpaperId: uuidv4(),
        createdAt: now,
        updatedAt: now,
        createdBy: shelby.userId,
        publishedAt: now,
        publishedBy: shelby.userId,
        region: ['australia'],
        name: 'Payroll Reconciliation 2024',
        description: 'Workpaper for annual payroll reconciliations',
        tags: ['payroll'],
        workpaperType: ['payroll'],
        entityType: ['company']
      },
      {
        workpaperId: uuidv4(),
        createdAt: now,
        updatedAt: now,
        createdBy: shelby.userId,
        publishedAt: now,
        publishedBy: shelby.userId,
        region: ['australia', 'newZealand'],
        name: 'Year-End Checklist 2025',
        description: 'Comprehensive year-end checklist for multiple regions',
        tags: ['checklist', 'yearEnd'],
        workpaperType: ['compliance'],
        entityType: ['company', 'trust', 'partnership']
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('workpapers', null, {});
  }
};
