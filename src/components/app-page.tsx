'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from "lucide-react"

export function PageComponent() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-10-16%20at%209.23.40%20PM-rkE9bungUouzmjMTddQeeu5TJyRbEs.jpeg')`,
          filter: "brightness(0.4)",
        }}
      ></div>
      <div className="relative z-10">
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-red-500">The Gamer's Arena</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Tournaments</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8">
          <section className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-red-500">Dominate the Arena</h2>
            <p className="text-xl mb-6">Join epic mobile esports battles in BGMI and Free Fire</p>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Join Tournament
            </Button>
          </section>
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gray-800 border-red-500">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-red-500">BGMI Tournaments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Compete in intense BGMI battles and prove your skills!</p>
                <p className="text-lg font-semibold text-green-400">Earn per kill and on winning!</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-red-500">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-red-500">Free Fire Showdowns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Dominate the Free Fire arena and claim your victory!</p>
                <p className="text-lg font-semibold text-green-400">Massive prizes for top performers!</p>
              </CardContent>
            </Card>
          </section>
          <section className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Compete?</h3>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Send className="mr-2 h-4 w-4" />
              Join on Telegram
            </Button>
          </section>
        </main>
        <footer className="mt-12 p-4 text-center text-gray-400">
          <p>&copy; 2024 The Gamer's Arena. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}