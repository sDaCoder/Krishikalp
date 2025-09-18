import LoginForm from "@/components/Login/login-form"
import HelpButton from "@/components/HelpButton/HelpButton";
import { auth } from "../../../lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function page() {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  console.log(session)
  if(session){
    return redirect("/dashboard")
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/pixel-sunset-lake.3840x2160.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10">
        <LoginForm />
      </div>

      <HelpButton  />
    </div>
  )
}