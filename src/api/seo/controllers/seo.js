'use strict';

/**
 * seo controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

//module.exports = createCoreController('api::seo.seo');

module.exports = createCoreController("api::seo.seo", ({ strapi }) => ({
  async find(ctx) {
    const seoAttributes = await strapi.entityService.findMany('api::seo.seo', {
      fields: ['title', 'description'],
      populate: ['OpenGraph.image', 'additionalLinkTags'],
    });
    const headerAttributes = await strapi.entityService.findMany('api::header.header', {
      fields: ['title', 'subtitle', 'motovationalPhrase', 'image', 'button']
    });
    const skilltAttributes = await strapi.entityService.findMany('api::skill.skill', {
      fields: ['title', 'subtitle'],
      populate: ['Technologie'],
    });
    const factAttributes = await strapi.entityService.findMany('api::fact.fact', {
      fields: ['title'],
      populate: ['factsAbout'],
    });
    const educationAttributes = await strapi.entityService.findMany('api::education.education', {
      fields: ['title', 'subtitle', 'faculty', 'course', 'state'],
    });
    const projectAttributes = await strapi.entityService.findMany('api::project.project', {
      fields: ['title', 'subtitle', 'button'],
      populate: ['Projects.ProjectTechnologie'],
    });
    const footerAttributes = await strapi.entityService.findMany('api::footer.footer', {
      fields: ['title', 'subtitle', 'email', 'phone'],
    });

    const result = {
      seo: seoAttributes,
      header: headerAttributes,
      skill: skilltAttributes,
      fact: factAttributes,
      education: educationAttributes,
      project: projectAttributes,
      footer: footerAttributes,
    }

    return result;
  },
}));
