import { DATABASE_NAME } from "@/constants/database";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";

const expoDb = openDatabaseSync(DATABASE_NAME);

export const db = drizzle(expoDb);
