'use strict';
const { v4: uuidv4 } = require('uuid');

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const [users] = await queryInterface.sequelize.query(`
      SELECT "userId", "email"
      FROM "users"
    `);
    const [firms] = await queryInterface.sequelize.query(`
      SELECT "firmId", "name"
      FROM "firms"
    `);

    const shelby = users.find(u => u.email === 'shelbythomas@shelby.com');
    const firm = firms[0]; // Select the first firm

    if (!shelby) throw new Error('Shelby user not found. Run user seeder first.');
    if (!firm) throw new Error('Firm not found. Run firm seeder first.');

    const now = new Date();

    const sampleTags = [['bas'], ['fbt'], ['gst'], ['tax'], ['yearEnd'], ['compliance'], ['checklist']];
    const sampleRegions = [['australia'], ['newZealand'], ['unitedKingdom'], ['australia', 'newZealand']];
    const sampleEntityTypes = [['company'], ['trust'], ['partnership'], ['company', 'trust']];
    const sampleTypes = [['bas'], ['fbt'], ['compliance'], ['gst'], ['corporationTax'], ['payroll']];

    const data = Array.from({ length: 20 }).map((_, i) => ({
      contentId: uuidv4(), // ← changed from workpaperId
      createdAt: now,
      updatedAt: now,
      createdBy: shelby.userId,
      created: now,
      region: sampleRegions[i % sampleRegions.length],
      name: `Template ${i + 1}`,
      description: `Auto-generated content description for template ${i + 1}`,
      tags: sampleTags[i % sampleTags.length],
      workpaperType: sampleTypes[i % sampleTypes.length],
      entityType: sampleEntityTypes[i % sampleEntityTypes.length],
      firmId: firm.firmId
    }));

    await queryInterface.bulkInsert('content', data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('content', null, {});
  }
};
