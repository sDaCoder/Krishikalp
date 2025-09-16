"use client"
import React from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { authClient } from '../../../lib/auth-client'
import { useRouter } from 'next/navigation'

const UserDashboard: React.FC = () => {

    const router = useRouter()
    const {
        data: session,
        isPending,
        error
    } = authClient.useSession()
    const user = session?.user

    const handleLogout = async () => {
        try {
            await authClient.signOut()
            toast.success('Logged out successfully')
            router.push('/login')
        } catch (error) {
            toast.error('Failed to log out')
        }
    }

    return (
        <>
            <div className='text-3xl text-foreground'>
                Welcome {user?.name.split(" ")[0]}
            </div>
            <div className='text-xl text-foreground'>
                This is your dashboard
            </div>
            <Button className='mx-auto' onClick={() => handleLogout()}>Logout</Button>
        </>
    )
}

export default UserDashboard
