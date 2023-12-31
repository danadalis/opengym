import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default function Index() {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black text-white">
      <nav className="w-full flex justify-center h-16">
        <div className="w-full max-w-4xl flex justify-end items-center p-3 text-sm">
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>
      {/* This is where the "OpenGym" heading from your HTML goes */}

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <main className="flex flex-col items-center justify-center flex-1 w-full">
          <h1 className="text-clamp text-center font-bold">OpenGym</h1>
        </main>
      </div>

      <footer className="w-full p-8 flex justify-center text-center text-xs">
        <p className="font-bold hover:underline">
          Developed by{' '}
          <a
            href="https://danadalis.xyz/?utm_source=opengym"
            target="_blank"
            rel="noreferrer"
          >
            danadalis
          </a>
        </p>
      </footer>
    </div>
  );
}
