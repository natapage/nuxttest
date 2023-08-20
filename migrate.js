import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import * as dotenv from "dotenv";
dotenv.config();

const db = drizzle(sql);

await migrate(db, { migrationsFolder: "drizzle" });
