import { NextResponse } from "next/server"
import { userSignupSchema } from "@/lib/validations/userSchema"
import { signup } from "../../../../../server/users"

export async function POST(request: Request) {
	try {
		const body = await request.json()

		const parsed = userSignupSchema.safeParse(body)
		if (!parsed.success) {
			return NextResponse.json(
				{ message: "Validation failed", issues: parsed.error.issues },
				{ status: 400 }
			)
		}

		const { name, email, phone, password } = parsed.data
		const result = await signup(name, email, password)

		if (result?.success) {
			return NextResponse.json(
				{ 
					success: true, 
					message: result?.message || "Signup successful",
					data: { name, email, phone }
				},
				{ status: 200 }
			)
		}

		return NextResponse.json(
			{
				success: false,
				message: result?.message || "User signup failed",
			},
			{ status: 401 }
		)
	} catch (err) {
		console.error("[API] Error handling signup:", err)
		return NextResponse.json({ message: "Unexpected server error" }, { status: 500 })
	}
}