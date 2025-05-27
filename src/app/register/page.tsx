"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Cloud, Building, Users, Shield, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Register() {
  const [step, setStep] = useState(1)
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">FileVault</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Organization Account</h1>
          <p className="text-gray-600">Join thousands of organizations using FileVault for secure file storage</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 ${step >= 1 ? "text-purple-600" : "text-purple-300"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-400"}`}
              >
                {step > 1 ? <Check className="w-4 h-4" /> : "1"}
              </div>
              <span className="hidden md:block font-medium">Organization</span>
            </div>
            <div className="w-12 h-px bg-purple-200"></div>
            <div className={`flex items-center gap-2 ${step >= 2 ? "text-purple-600" : "text-purple-300"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-400"}`}
              >
                {step > 2 ? <Check className="w-4 h-4" /> : "2"}
              </div>
              <span className="hidden md:block font-medium">Admin Account</span>
            </div>
            <div className="w-12 h-px bg-purple-200"></div>
            <div className={`flex items-center gap-2 ${step >= 3 ? "text-purple-600" : "text-purple-300"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-400"}`}
              >
                3
              </div>
              <span className="hidden md:block font-medium">Verification</span>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-2xl mx-auto">
          {step === 1 && (
            <Card className="border-purple-100 bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Organization Information
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Tell us about your organization to get started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="orgName" className="text-gray-900">
                      Organization Name
                    </Label>
                    <Input
                      id="orgName"
                      placeholder="Acme Corporation"
                      className="border-purple-200 focus:border-purple-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-gray-900">
                      Industry
                    </Label>
                    <select
                      id="industry"
                      className="flex h-10 w-full rounded-md border border-purple-200 bg-white px-3 py-2 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
                    >
                      <option value="">Select industry</option>
                      <option value="technology">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="education">Education</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="size" className="text-gray-900">
                      Organization Size
                    </Label>
                    <select
                      id="size"
                      className="flex h-10 w-full rounded-md border border-purple-200 bg-white px-3 py-2 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
                    >
                      <option value="">Select size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-gray-900">
                      Country
                    </Label>
                    <select
                      id="country"
                      className="flex h-10 w-full rounded-md border border-purple-200 bg-white px-3 py-2 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
                    >
                      <option value="">Select country</option>
                      <option value="us">United States</option>
                      <option value="ca">Canada</option>
                      <option value="uk">United Kingdom</option>
                      <option value="de">Germany</option>
                      <option value="fr">France</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website" className="text-gray-900">
                    Website (Optional)
                  </Label>
                  <Input
                    id="website"
                    placeholder="https://www.acme.com"
                    className="border-purple-200 focus:border-purple-400"
                  />
                </div>

                <Button
                  onClick={() => setStep(2)}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                >
                  Continue
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card className="border-purple-100 bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Admin Account Setup
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Create your administrator account for the organization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-900">
                      First Name
                    </Label>
                    <Input id="firstName" placeholder="John" className="border-purple-200 focus:border-purple-400" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-900">
                      Last Name
                    </Label>
                    <Input id="lastName" placeholder="Doe" className="border-purple-200 focus:border-purple-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-900">
                    Work Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@acme.com"
                    className="border-purple-200 focus:border-purple-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-900">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    className="border-purple-200 focus:border-purple-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-gray-900">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    className="border-purple-200 focus:border-purple-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jobTitle" className="text-gray-900">
                    Job Title
                  </Label>
                  <Input
                    id="jobTitle"
                    placeholder="IT Administrator"
                    className="border-purple-200 focus:border-purple-400"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" className="border-purple-300" />
                  <Label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the{" "}
                    <Link href="#" className="text-purple-600 hover:text-purple-800 underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-purple-600 hover:text-purple-800 underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="border-purple-300 text-purple-700 hover:bg-purple-50"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                  >
                    Create Account
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card className="border-purple-100 bg-white/50 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-gray-900">Verify Your Email</CardTitle>
                <CardDescription className="text-gray-600">
                  We&apos;ve sent a verification link to john@acme.com
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    Please check your email and click the verification link to activate your account. The link will
                    expire in 24 hours.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={() => router.push("/dashboard")}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                  >
                    Go to Dashboard (Demo)
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                    Resend Verification Email
                  </Button>
                  <Button variant="outline" className="w-full border-purple-300 text-purple-700 hover:bg-purple-50">
                    Change Email Address
                  </Button>
                </div>

                <p className="text-sm text-gray-600">
                  Already verified?{" "}
                  <button
                    onClick={() => router.push("/dashboard")}
                    className="text-purple-700 hover:text-purple-900 underline font-medium"
                  >
                    Go to Dashboard
                  </button>
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-purple-700 hover:text-purple-900 underline font-medium">
              Sign in here
            </Link>
          </p>
          <p className="text-gray-600 mt-2">
            <Link href="/" className="text-purple-700 hover:text-purple-900 underline font-medium">
              ← Back to home
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
