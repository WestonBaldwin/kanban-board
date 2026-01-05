'use client'

import { useState } from 'react'
import {
  useSignInEmailPassword,
  useAuthenticationStatus,
} from '@nhost/nextjs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [needsVerification, setNeedsVerification] = useState(false)

  const {
    signInEmailPassword,
    isLoading,
    isError,
    error,
  } = useSignInEmailPassword()

  const { isAuthenticated } = useAuthenticationStatus()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setNeedsVerification(false)

    const result = await signInEmailPassword(email, password)

    // User exists but hasn’t clicked the verification email yet
    if (result?.needsEmailVerification) {
      setNeedsVerification(true)
    }
  }

  // If we get here, auth + session are valid
  if (isAuthenticated) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Welcome back!</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You are signed in.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>

            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>

            {needsVerification && (
              <p className="text-yellow-600 text-sm">
                Check your email and verify your account before signing in.
              </p>
            )}

            {isError && !needsVerification && (
              <p className="text-red-500 text-sm">
                {error?.message}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
