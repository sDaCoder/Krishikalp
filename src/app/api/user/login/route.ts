import { userLoginSchema } from "@/lib/validations/userSchema"
import { NextResponse } from "next/server"
import { signIn } from "../../../../../server/users"

export async function POST(request: Request) {
    try {
        const body = await request.json()

        const parsed = userLoginSchema.safeParse(body)
        if (!parsed.success) {
            return NextResponse.json(
                { message: "Validation failed", issues: parsed.error.issues },
                { status: 400 }
            )
        }

        const { email, password } = parsed.data
        const result = await signIn(email, password)

        if (result?.success) {
            return NextResponse.json(
                { success: true, message: result.message || "Login successful" },
                { status: 200 }
            )
        }

        return NextResponse.json(
            { success: false, message: result?.message || "Login failed" },
            { status: 401 }
        )
    } catch (error) {
        console.error("[API] Error handling login:", error)
        return NextResponse.json({ message: "Unexpected server error" }, { status: 500 })
    }
}