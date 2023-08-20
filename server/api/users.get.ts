import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import * as schema from "../db/schema";

const db = drizzle(sql, {schema});

export default eventHandler(async (event) => {
  const all = await db.query.users.findMany({})
  const allUsers = await db.select().from(users);
  const findById = await db.select().from(users).where({id: })
  return {
    allUsers,
  };
});
