import { auth } from '../../../lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import UserDashboard from '@/components/UserDashboard/UserDashboard'

const page = async() => {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect("/login")
  }

  return (
    <>
      <UserDashboard />
    </>
  )
}

export default page