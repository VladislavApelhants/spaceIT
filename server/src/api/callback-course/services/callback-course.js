'use strict';

/**
 * callback-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::callback-course.callback-course');
