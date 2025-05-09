import { integer, pgEnum, pgTable, serial, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/pg-core";

export const authTypeEnum = pgEnum("auth_type", ["email", "google", "github"]);

export const tierEnum = pgEnum("tier", ["basic","premium"]);

export const roleEnum = pgEnum("role", ["admin", "user"]);

export const users = pgTable(
    "users",
    {
      id: serial("id").primaryKey(),
      uuid: varchar("uuid", { length: 36 }).notNull().unique(),
      email: text("email").notNull().unique(),
      firstName: text("first_name"),
      lastName: text("last_name"),
      password: text("password"),
      auth_type: authTypeEnum().notNull().default("email"),
      credits_available: integer("credits_available").notNull().default(10),
      credit_renewal_date: timestamp("credit_renewal_date"),
      tier: tierEnum().notNull().default("basic"),
      role: roleEnum().notNull().default("user"),
      country: varchar("country", { length: 50 }),
      city: varchar("city", { length: 50 }),
      zipcode: varchar("zipcode", { length: 10 }),
      profilePictureUrl: text("profile_picture_url"),
      createdAt: timestamp("created_at").notNull().defaultNow(),
      updatedAt: timestamp("updated_at").notNull().defaultNow(),
    },
    (users) => ({
      usersIdIdx: uniqueIndex("users_id_idx").on(users.id),
      usersUuidIdx: uniqueIndex("users_uuid_idx").on(users.uuid),
      usersEmailIdx: uniqueIndex("users_email_idx").on(users.email)
    })
  );
