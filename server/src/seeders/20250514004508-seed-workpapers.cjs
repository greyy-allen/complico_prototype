'use strict';
const { v4: uuidv4 } = require('uuid');

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const [users] = await queryInterface.sequelize.query(`
      SELECT "userId", "email"
      FROM "users"
    `);

    const [contents] = await queryInterface.sequelize.query(`
      SELECT "contentId", "name", "description", "region", "tags", "workpaperType", "entityType"
      FROM "content"
      ORDER BY "name"
      LIMIT 12
    `);

    const shelby = users.find(u => u.email === 'shelbythomas@shelby.com');
    if (!shelby) {
      throw new Error('Shelby user not found. Run user seeder first.');
    }
    if (contents.length < 12) {
      throw new Error('Not enough content records. Ensure at least 12 are seeded.');
    }

    const now = new Date();

    const workpapersData = contents.map((content) => ({
      workpaperId: uuidv4(),
      contentId: content.contentId,
      createdAt: now,
      updatedAt: now,
      createdBy: shelby.userId,
      publishedAt: now,
      publishedBy: shelby.userId,
      region: content.region,
      name: content.name,
      description: content.description,
      tags: content.tags,
      workpaperType: content.workpaperType,
      entityType: content.entityType,
    }));

    await queryInterface.bulkInsert('workpapers', workpapersData);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('workpapers', null, {});
  }
};
