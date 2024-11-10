import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "./schema";

export const sql = neon(process.env.POSTGRES_URL!);
export const db = drizzle(sql, { schema });