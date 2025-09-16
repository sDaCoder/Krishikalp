import { NextResponse } from "next/server"
import { userSignupSchema } from "@/lib/validations/userSchema"

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
    
    const { name, email, phone } = parsed.data
    console.log("[API] Received signup:", { name, email, phone })

    return NextResponse.json(
      {
        message: "User signup received",
        data: { name, email, phone }
      },
      { status: 201 }
    )
  } catch (err) {
    console.error("[API] Error handling signup:", err)
    return NextResponse.json({ message: "Unexpected server error" }, { status: 500 })
  }
}