'use strict';

/**
 * barbero service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::barbero.barbero');
