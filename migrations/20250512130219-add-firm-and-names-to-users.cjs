'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'firstName', {
      type: Sequelize.STRING(50),
      allowNull: false
    });

    await queryInterface.addColumn('users', 'lastName', {
      type: Sequelize.STRING(50),
      allowNull: false
    })

    await queryInterface.addColumn('users', 'firmId', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.addConstraint('users', {
      fields: ['firmId'],
      type: 'foreign key',
      name: 'fk_users_firm',
      references: {
        table: 'firms',
        field: 'firmId'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    });
  },

  async down (queryInterface) {
    await queryInterface.removeConstraint('users', 'fk_users_firm');
    await queryInterface.removeColumn('users', 'firmId');
    await queryInterface.removeColumn('users', 'lastName');
    await queryInterface.removeColumn('users', 'firstName');
  }
};
