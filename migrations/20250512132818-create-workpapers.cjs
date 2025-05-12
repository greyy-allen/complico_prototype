'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('workpapers', {
      workpaperId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
        primaryKey: true,
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'userId' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      publishedAt: {
        type: Sequelize.DATE,
      },
      publishedBy: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'userId' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },

      region: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      workpaperType: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      entityType: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      }
    });
  },

  async down (queryInterface/*, Sequelize*/) {
    await queryInterface.dropTable('workpapers');
  }
};
