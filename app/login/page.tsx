'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import {
  GoogleIcon,
  AppleIcon,
  GuestIcon,
  StatusBar,
  DynamicIsland,
  HomeIndicator,
} from '@/components/ui/Icons'
import { api, saveToken } from '@/lib/api'

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})
type FormData = z.infer<typeof schema>

export default function LoginPage() {
  const router = useRouter()
  const [showPass, setShowPass] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setServerError('')
    try {
      const res = await api.login(data)
      saveToken(res.token)
      router.push('/dashboard')
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : 'Login failed. Please try again.')
    }
  }

  const handleGuest = async () => {
    try {
      const res = await api.guestLogin()
      saveToken(res.token)
      router.push('/dashboard')
    } catch {
      setServerError('Guest login failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[#F0EFE9] flex items-center justify-center p-4">
      <div className="bg-white rounded-[2.8rem] w-full max-w-[360px] shadow-sm overflow-hidden">
        <StatusBar />
        <DynamicIsland />

        <div className="px-7 pb-6 pt-2">
          <h1 className="text-[26px] font-bold text-center text-gray-900 mb-7 tracking-tight">
            Login
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-3">
            <Input
              {...register('email')}
              type="email"
              placeholder="Email"
              autoComplete="email"
              leftIcon={<Mail size={17} />}
              error={errors.email?.message}
            />
            <Input
              {...register('password')}
              type={showPass ? 'text' : 'password'}
              placeholder="Password"
              autoComplete="current-password"
              leftIcon={<Lock size={17} />}
              rightElement={
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label={showPass ? 'Hide password' : 'Show password'}
                >
                  {showPass ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              }
              error={errors.password?.message}
            />

            <div className="flex justify-end pt-0.5">
              <button
                type="button"
                className="text-[13px] text-gray-600 underline underline-offset-2 hover:text-gray-800 transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            {serverError && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                <p className="text-sm text-red-600">{serverError}</p>
              </div>
            )}

            <Button type="submit" variant="dark" loading={isSubmitting}>
              Login
            </Button>
          </form>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-[13px] text-gray-400 font-medium">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="space-y-3">
            <Button variant="outline" type="button">
              <GoogleIcon />
              Continue with Google
            </Button>
            <Button variant="green" type="button">
              <AppleIcon color="#1C3A1C" />
              Continue with Apple
            </Button>
            <Button variant="outline" type="button" onClick={handleGuest}>
              <GuestIcon />
              Continue As Guest
            </Button>
          </div>

          <p className="text-center text-[13px] text-gray-500 mt-5">
            Need an account?{' '}
            <button
              onClick={() => router.push('/register')}
              className="font-bold text-gray-800 hover:underline"
            >
              Sign up
            </button>
          </p>
        </div>

        <HomeIndicator />
      </div>
    </div>
  )
}