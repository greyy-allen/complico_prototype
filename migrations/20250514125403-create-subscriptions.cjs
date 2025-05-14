'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('subscriptions', {
      subscriptionId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
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
      },
      workpaperId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'workpapers',
          key: 'workpaperId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      subscriberId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'userId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      status: {
        type: Sequelize.STRING(20),
        allowNull: false,
        defaultValue: 'active'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      }
    });

    await queryInterface.addConstraint('subscriptions', {
      fields: ['firmId', 'workpaperId', 'subscriberId'],
      type: 'unique',
      name: 'unique_firm_workpaper_subscriber'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('subscriptions');
  }
};
