'use strict';
const { v4: uuidv4 } = require('uuid');

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const [users] = await queryInterface.sequelize.query(`
      SELECT "userId", "email", "firmId"
      FROM "users"
    `);

    const shelby = users.find(u => u.email === 'shelbythomas@shelby.com');
    const tony = users.find(u => u.email === 'ironman@starkindustries.com');

    if (!shelby || !tony) {
      throw new Error('Required vendor users not found. Run user seeder first.');
    }

    const now = new Date();

    const sampleTags = [['bas'], ['fbt'], ['gst'], ['tax'], ['yearEnd'], ['compliance'], ['checklist']];
    const sampleRegions = [['australia'], ['newZealand'], ['unitedKingdom'], ['australia', 'newZealand']];
    const sampleEntityTypes = [['company'], ['trust'], ['partnership'], ['company', 'trust']];
    const sampleTypes = [['bas'], ['fbt'], ['compliance'], ['gst'], ['corporationTax'], ['payroll']];

    const data = Array.from({ length: 20 }).map((_, i) => {
      const isFirstHalf = i < 10;
      const vendor = isFirstHalf ? shelby : tony;

      return {
        contentId: uuidv4(),
        createdAt: now,
        updatedAt: now,
        createdBy: vendor.userId,
        created: now,
        region: sampleRegions[i % sampleRegions.length],
        name: `Template ${i + 1}`,
        description: `Auto-generated content description for template ${i + 1}`,
        tags: sampleTags[i % sampleTags.length],
        workpaperType: sampleTypes[i % sampleTypes.length],
        entityType: sampleEntityTypes[i % sampleEntityTypes.length],
        firmId: vendor.firmId,
      };
    });

    await queryInterface.bulkInsert('content', data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('content', null, {});
  }
};
