'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'CREATE EXTENSION IF NOT EXISTS "pgcrypto";'
    );

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
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'users', key: 'userId' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },

      publishedAt: {
        type: Sequelize.DATE,
      },

      publishedBy: {
        type: Sequelize.UUID,
        references: { model: 'users', key: 'userId' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },

      contentId: {
        type: Sequelize.UUID,
        references: {
          model: 'content',
          key: 'contentId',
        },
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
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('workpapers');
  }
};
