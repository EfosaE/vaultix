import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Cloud, Zap, Lock, Share2, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Header */}
      <header className="border-b border-purple-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Vaultix</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-purple-700 hover:text-purple-900 hover:bg-purple-50" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button
              variant="gradient"
              asChild
            >
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-200">
          Trusted by 10,000+ Organizations
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Secure File Storage
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            Made Simple
          </span>
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Empower your organization with enterprise-grade file storage, seamless sharing, and robust security. Store,
          organize, and collaborate with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="gradient"
            className="text-lg px-8"
            asChild
          >
            <Link href="/register">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-300 text-purple-700 hover:bg-purple-50 text-lg px-8"
          >
            Watch Demo
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything Your Organization Needs</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Built for modern teams who need secure, scalable, and intuitive file management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-purple-100 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-gray-900">Enterprise Security</CardTitle>
              <CardDescription className="text-gray-600">
                Bank-grade encryption, compliance certifications, and advanced access controls
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-purple-100 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-gray-900">Team Collaboration</CardTitle>
              <CardDescription className="text-gray-600">
                Real-time collaboration, version control, and seamless team workflows
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-purple-100 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-gray-900">Lightning Fast</CardTitle>
              <CardDescription className="text-gray-600">
                Instant file uploads, quick search, and optimized performance worldwide
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-purple-100 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-gray-900">Access Control</CardTitle>
              <CardDescription className="text-gray-600">
                Granular permissions, role-based access, and audit trails
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-purple-100 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-gray-900">Smart Sharing</CardTitle>
              <CardDescription className="text-gray-600">
                Secure links, expiration dates, and download tracking
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-purple-100 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-gray-900">Unlimited Storage</CardTitle>
              <CardDescription className="text-gray-600">
                Scale without limits, automatic backups, and 99.9% uptime guarantee
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="container mx-auto px-4 py-20 bg-gradient-to-r from-purple-50 to-purple-100 rounded-3xl"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-700">Choose the plan that fits your organization&apos;s needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-purple-200 bg-white flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-purple-900">Starter</CardTitle>
              <CardDescription className="text-purple-600">Perfect for small teams</CardDescription>
              <div className="text-3xl font-bold text-purple-900 mt-4">
                $9<span className="text-lg font-normal text-purple-600">/user/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span className="text-purple-700">100GB storage per user</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span className="text-purple-700">Basic sharing features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span className="text-purple-700">Email support</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
            </CardContent>
          </Card>

          <Card className="border-purple-300 bg-gradient-to-br from-purple-600 to-purple-700 text-white relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white text-purple-700">
              Most Popular
            </Badge>
            <CardHeader>
              <CardTitle className="text-white">Professional</CardTitle>
              <CardDescription className="text-purple-100">For growing organizations</CardDescription>
              <div className="text-3xl font-bold text-white mt-4">
                $19<span className="text-lg font-normal text-purple-200">/user/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-200" />
                  <span className="text-purple-100">1TB storage per user</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-200" />
                  <span className="text-purple-100">Advanced collaboration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-200" />
                  <span className="text-purple-100">Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-200" />
                  <span className="text-purple-100">Admin controls</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-white text-purple-700 hover:bg-purple-50">Get Started</Button>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-white">
            <CardHeader>
              <CardTitle className="text-purple-900">Enterprise</CardTitle>
              <CardDescription className="text-purple-600">For large organizations</CardDescription>
              <div className="text-3xl font-bold text-purple-900 mt-4">
                Custom<span className="text-lg font-normal text-purple-600"> pricing</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span className="text-purple-700">Unlimited storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span className="text-purple-700">Custom integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span className="text-purple-700">24/7 dedicated support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span className="text-purple-700">SLA guarantee</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full mt-6 border-purple-300 text-purple-700 hover:bg-purple-50">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your File Management?</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Join thousands of organizations already using Vaultix to streamline their workflows
        </p>
        <Button
          size="lg"
          variant={"gradient"}
          className="text-lg px-8"
          asChild
        >
          <Link href="/register">
            Start Your Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-100 bg-purple-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Vaultix</span>
              </div>
              <p className="text-gray-600">Secure, scalable file storage for modern organizations.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2 text-purple-600">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-purple-600">
                <li>
                  <Link href="#" className="hover:text-purple-800">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-800">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-800">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-800">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-purple-600">
                <li>
                  <Link href="#" className="hover:text-purple-800">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-800">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-800">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-800">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-200 mt-8 pt-8 text-center text-purple-600">
            <p>&copy; 2024 Vaultix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
