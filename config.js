const config = {
  dbUrl: process.env.DB_URL || "mongodb+srv://db_user_practice:12345678a@cluster0-u3ayl.mongodb.net/test", 
  port: process.env.PORT || 3000, //Variable de entorno reescribirá a la quemada en caso de existir
  host: process.env.HOST || "http://localhost",
  publicRoute: process.env.PUBLIC_ROUTE || "/app",
  filesRoute: process.env.FILES_ROUTE || "/files/"
}

module.exports = config;