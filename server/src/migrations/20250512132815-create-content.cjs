'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('content', {
      contentId: { // ← changed from workpaperId
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      createdBy: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'userId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      created: {
        type: Sequelize.DATE,
        allowNull: true
      },
      region: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      workpaperType: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      entityType: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      firmId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'firms',
          key: 'firmId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('content');
  }
};
