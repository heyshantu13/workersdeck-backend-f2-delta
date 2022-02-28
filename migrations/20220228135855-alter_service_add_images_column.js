'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return Promise.all([
      queryInterface.addColumn('Services', 'service_image', {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "https://www.assureshift.in/sites/default/files/images/blog/affordable-home-cleaning-services-in%20pune.jpg",
      }),
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('Services', 'service_image');
  }
};
