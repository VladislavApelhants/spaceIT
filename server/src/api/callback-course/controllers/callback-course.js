"use strict";
const { sendEmail } = require("../../../helpers/sendEmail");
/**
 * callback-course controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::callback-course.callback-course",
  () => ({
    // some custom logic for POST request
    async create(ctx) {
      const { data } = await super.create(ctx);
      const { name, email, phone, courseName } = data.attributes;
      const emailTemplate = {
        from: "spaceitschool@ukr.net",
        to: "spaceitschool@ukr.net",
        subject: `Замовлення курсу ${courseName}`,
        html: `<h3>Користувач залишив заявку на консультацію з курсу ${courseName}.</h3>
               <p>Ім'я: ${name}</p>
               <p>Номер телефону: ${phone}</p>
               <p>Пошта: ${email}</p>
               <p>Курс: ${courseName}</p>`,
      };

      sendEmail(emailTemplate);
      return true;
    },
  })
);
