import { PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dbSchema from "./schema"

declare global {
  var db: PostgresJsDatabase | undefined;
}

let db: PostgresJsDatabase;

if (process.env.NODE_ENV === "production") {
    db = drizzle(postgres(process.env.POSTGRES_URL!, { max: 1 }));
} else {
    if (!global.db) global.db = drizzle(postgres(process.env.POSTGRES_URL!, { max: 1 }));
    db = global.db;
}

export { db };