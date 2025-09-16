"use server";
import { auth } from "../lib/auth"

export const signIn = async (
    email: string,
    password: string
) => {
    try {
        await auth.api.signInEmail({
            body: {
                email,
                password,
            }
        })
        return {
            success: true,
            message: "User signed in successfully",
        }
    } catch (error) {
        const e = error as Error
        return {
            success: false,
            message: e?.message || "User signed in failed",
        }
    }
}

export const signup = async (
    name: string,
    email: string,
    password: string
) => {
    try {
        await auth.api.signUpEmail({
            body: {
                name,
                email,
                password,
            }
        })
        console.log("User signed up successfully")
        return {
            success: true,
            message: "User signed up successfully",
        }
    } catch (error) {
        const e = error as Error
        return {
            success: false,
            message: e?.message || "User signed up failed",
        }
    }
}