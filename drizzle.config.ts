// import type { Config } from "drizzle-kit";

// export default {
//   schema: "./src/schemas/*.ts",
//   out: "./src/migrations",
//   driver: "pg",
//   dbCredentials: {
//     connectionString: process.env.DATABASE_URL!,
//   },
// } satisfies Config;


import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
    schema: "./src/schemas/*.ts",
    out: "./src/migrations",
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});