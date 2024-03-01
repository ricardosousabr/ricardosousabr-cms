'use strict';


/**
 * footer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::footer.footer", ({ strapi }) => ({
  async find(ctx) {
    const footerAttributes = await strapi.db.query('api::footer.footer').findOne({
      select: ['title', 'subtitle', 'email', 'phone'],
    });
    const educationAttributes = await strapi.db.query('api::education.education').findOne({
      select: ['title', 'subtitle', 'faculty', 'course', 'state'],
    });

    const result = {
      footer: footerAttributes,
      education: educationAttributes
    }

    return result;
  },
}));
