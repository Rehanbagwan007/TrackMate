const dotenv = require('dotenv')
dotenv.config()

// Prisma expects datasource URL to be available in the config when running CLI commands.
// Provide a straightforward CommonJS config that Prisma CLI can consume.


export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: { 
    path: 'prisma/migrations',
    seed: 'tsx prisma/seed.ts',
  },
  datasource: { 
    url: env("DATABASE_URL") 
  }
});