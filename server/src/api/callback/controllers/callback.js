"use strict";
const { sendEmail } = require("../../../helpers/sendEmail");
/**
 * callback controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::callback.callback", () => ({
  // some custom logic for POST request
  async create(ctx) {
    const { data } = await super.create(ctx);
    const { name, phone } = data.attributes;
    const emailTemplate = {
      from: "spaceitschool@ukr.net",
      to: "spaceitschool@ukr.net",
      subject: "Зворотній дзвінок",
      html: `<h3>Користувач залишив заявку на зворотній дзвінок.</h3>
               <p>Ім'я: ${name}</p>
               <p>Номер телефону: ${phone}</p>`,
    };

    sendEmail(emailTemplate);
    return true;
  },
}));
