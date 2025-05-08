import { pgTable, serial, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/pg-core";


export const users = pgTable(
    "users",
    {
      id: serial("id").primaryKey(),
      uuid: varchar("uuid", { length: 36 }).notNull().unique(),
      email: text("email").notNull().unique(),
      firstName: text("first_name"),
      lastName: text("last_name"),
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
