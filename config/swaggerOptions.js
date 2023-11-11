const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Nom de votre API",
      version: "1.0.0",
      description: "Description de votre API",
    },
  },
  apis: ["./routes/*.js"], // spécifiez le chemin vers vos fichiers de routes
};

module.exports = swaggerOptions;
