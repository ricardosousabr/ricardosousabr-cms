import type { Schema, Attribute } from '@strapi/strapi';

export interface FactsAboutFacts extends Schema.Component {
  collectionName: 'components_facts_about_facts';
  info: {
    displayName: 'facts';
  };
  attributes: {
    fact: Attribute.String & Attribute.Required;
  };
}

export interface ProjectTechnologieProjectTechnologie extends Schema.Component {
  collectionName: 'components_project_technologie_project_technologies';
  info: {
    displayName: 'projectTechnologie';
    description: '';
  };
  attributes: {
    nameTechnologie: Attribute.String & Attribute.Required;
  };
}

export interface ProjectTechnologieTechnologiesProject
  extends Schema.Component {
  collectionName: 'components_project_technologies_projects';
  info: {
    displayName: 'project';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String & Attribute.Required;
    srcMobile: Attribute.String;
    srcDesktop: Attribute.String & Attribute.Required;
    ProjectTechnologie: Attribute.Component<
      'project-technologie.project-technologie',
      true
    >;
  };
}

export interface SeoAdditionalLinkTags extends Schema.Component {
  collectionName: 'components_seo_additional_link_tags';
  info: {
    displayName: 'additionalLinkTags';
    description: '';
  };
  attributes: {
    rel: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    as: Attribute.String;
    type: Attribute.String;
  };
}

export interface SeoImages extends Schema.Component {
  collectionName: 'components_seo_images';
  info: {
    displayName: 'images';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    width: Attribute.BigInteger & Attribute.Required;
    height: Attribute.BigInteger & Attribute.Required;
    alt: Attribute.String & Attribute.Required;
    type: Attribute.String & Attribute.Required;
  };
}

export interface SeoOpenGraph extends Schema.Component {
  collectionName: 'components_seo_open_graphs';
  info: {
    displayName: 'openGraph';
    description: '';
  };
  attributes: {
    type: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    siteName: Attribute.String & Attribute.Required;
    image: Attribute.Component<'seo.images', true>;
  };
}

export interface TechnologieTechnologies extends Schema.Component {
  collectionName: 'components_technologie_technologies';
  info: {
    displayName: 'technologies';
    icon: 'layout';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    src: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'facts-about.facts': FactsAboutFacts;
      'project-technologie.project-technologie': ProjectTechnologieProjectTechnologie;
      'project-technologie.technologies-project': ProjectTechnologieTechnologiesProject;
      'seo.additional-link-tags': SeoAdditionalLinkTags;
      'seo.images': SeoImages;
      'seo.open-graph': SeoOpenGraph;
      'technologie.technologies': TechnologieTechnologies;
    }
  }
}
