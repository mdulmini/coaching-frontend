'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { clearToken, getToken, api } from '@/lib/api'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = getToken()
    if (!token) {
      router.replace('/login')
      return
    }
    api.me()
      .then(setUser)
      .catch(() => {
        clearToken()
        router.replace('/login')
      })
      .finally(() => setLoading(false))
  }, [router])

  const handleLogout = () => {
    clearToken()
    router.replace('/onboarding')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F0EFE9] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#5DC93E] border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F0EFE9] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-sm p-8 shadow-sm text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-[#5DC93E]/20 flex items-center justify-center mx-auto">
          <span className="text-2xl font-bold text-[#1C3A1C]">
            {user?.name?.[0]?.toUpperCase() ?? 'U'}
          </span>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">Welcome back!</h1>
          <p className="text-[15px] font-medium text-gray-700 mt-1">{user?.name}</p>
          <p className="text-[13px] text-gray-400">{user?.email}</p>
        </div>
        <div className="bg-[#F0EFE9] rounded-2xl p-4">
          <p className="text-sm text-gray-600">
            🎉 You&apos;re successfully logged in to the Private Coaching platform.
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="w-full h-12 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all"
        >
          Log out
        </button>
      </div>
    </div>
  )
}