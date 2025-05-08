CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"uuid" varchar(36) NOT NULL,
	"email" text NOT NULL,
	"first_name" text,
	"last_name" text,
	"profile_picture_url" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_uuid_unique" UNIQUE("uuid"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE UNIQUE INDEX "users_id_idx" ON "users" USING btree ("id");--> statement-breakpoint
CREATE UNIQUE INDEX "users_uuid_idx" ON "users" USING btree ("uuid");--> statement-breakpoint
CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");