import { drizzle } from 'drizzle-orm/node-postgres';
import { db } from './connection';
import { users } from './schemas/user.schema';



export const database = db;
export type Database = ReturnType<typeof drizzle>;
export const schema = {users};
export * from "drizzle-orm";