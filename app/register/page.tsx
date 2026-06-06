'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { StatusBar, DynamicIsland, HomeIndicator } from '@/components/ui/Icons'
import { api, saveToken } from '@/lib/api'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((d) => d.password === d.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})
type FormData = z.infer<typeof schema>

export default function RegisterPage() {
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
      const res = await api.register({
        name: data.name,
        email: data.email,
        password: data.password,
      })
      saveToken(res.token)
      router.push('/dashboard')
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : 'Registration failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[#F0EFE9] flex items-center justify-center p-4">
      <div className="bg-white rounded-[2.8rem] w-full max-w-[360px] shadow-sm overflow-hidden">
        <StatusBar />
        <DynamicIsland />

        <div className="px-7 pb-6 pt-2">
          <h1 className="text-[26px] font-bold text-center text-gray-900 mb-7 tracking-tight">
            Create Account
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-3">
            <Input
              {...register('name')}
              type="text"
              placeholder="Full Name"
              leftIcon={<User size={17} />}
              error={errors.name?.message}
            />
            <Input
              {...register('email')}
              type="email"
              placeholder="Email"
              leftIcon={<Mail size={17} />}
              error={errors.email?.message}
            />
            <Input
              {...register('password')}
              type={showPass ? 'text' : 'password'}
              placeholder="Password"
              leftIcon={<Lock size={17} />}
              rightElement={
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  {showPass ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              }
              error={errors.password?.message}
            />
            <Input
              {...register('confirmPassword')}
              type={showPass ? 'text' : 'password'}
              placeholder="Confirm Password"
              leftIcon={<Lock size={17} />}
              error={errors.confirmPassword?.message}
            />

            {serverError && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                <p className="text-sm text-red-600">{serverError}</p>
              </div>
            )}

            <Button type="submit" variant="dark" loading={isSubmitting}>
              Create Account
            </Button>
          </form>

          <p className="text-center text-[13px] text-gray-500 mt-5">
            Already have an account?{' '}
            <button
              onClick={() => router.push('/login')}
              className="font-bold text-gray-800 hover:underline"
            >
              Log in
            </button>
          </p>
        </div>

        <HomeIndicator />
      </div>
    </div>
  )
}