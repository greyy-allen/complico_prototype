'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reviews', {
      reviewId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'userId'
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

      rating: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      comment: {
        type: Sequelize.TEXT,
        allowNull: true
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      }
    });

    await queryInterface.addConstraint('reviews', {
      fields: ['userId', 'workpaperId'],
      type: 'unique',
      name: 'unique_user_workpaper_review'
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('reviews');
  }
};
