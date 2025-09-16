import { db } from "@/lib/db/db";
import { schema } from "@/lib/db/schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema,
    }),
    session: {
        expiresIn: 30 * 60 * 60, // 30 minutes
    },
    plugins: [nextCookies()],
});