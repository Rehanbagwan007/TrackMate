const dotenv = require('dotenv')
dotenv.config()

// Minimal CommonJS prisma config expected by Prisma CLI
module.exports = {
  schema: 'prisma/schema.prisma',
  datasources: {
    db: {
      provider: 'postgresql',
      url: process.env.DATABASE_URL,
    },
  },
}
