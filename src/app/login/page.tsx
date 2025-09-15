import LoginForm from "@/components/Login/login-form"
import HelpButton from "@/components/HelpButton/HelpButton";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/windmill-in-flower-field.3840x2160.mp4"
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