import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./server/db/*",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: `${process.env.POSTGRES_URL}?sslmode=require` as string,
    ssl: true,
  },
} satisfies Config;
