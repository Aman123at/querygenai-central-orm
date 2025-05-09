CREATE TYPE "public"."auth_type" AS ENUM('email', 'google', 'github');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('admin', 'user');--> statement-breakpoint
CREATE TYPE "public"."tier" AS ENUM('basic', 'premium');--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "password" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "auth_type" "auth_type" DEFAULT 'email' NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "credits_available" integer DEFAULT 10 NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "credit_renewal_date" timestamp;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "tier" "tier" DEFAULT 'basic' NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "role" "role" DEFAULT 'user' NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "country" varchar(50);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "city" varchar(50);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "zipcode" varchar(10);