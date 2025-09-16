import { z } from "zod"

export const userSignupSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters long"),
	email: z.string().trim().toLowerCase().email(),
	phone: z
		.string()
		.length(10, "Phone number must be exactly 10 characters long")
		.regex(/^\d+$/, "Phone number must contain only digits"),
	password: z.string().min(4, "Password must be at least 4 characters long"),
})

export const userLoginSchema = z.object({
	email: z.string().trim().toLowerCase().email(),
	password: z.string().min(4, "Password must be at least 4 characters long"),	
})

export type UserSignupSchema = z.infer<typeof userSignupSchema>
export type UserLoginSchema = z.infer<typeof userLoginSchema>