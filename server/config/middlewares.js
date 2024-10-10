module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://spaceit-production.up.railway.app",
        "http://localhost:1337",
        "http://0.0.0.0:1337",
      ], // Укажи домены, с которых разрешены запросы
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
