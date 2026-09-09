
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Header from "@/components/header";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/ui/themes'
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import UserSync from "@/components/UserSync";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const inter = Inter({
  subsets: ['latin'],
});


export const metadata = {
  title: "SpotX-AI",
  description: "Discover and create amazing events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={`bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white ${inter.className}`}>

         <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        />

         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <ClerkProvider
          appearance={{
          theme: dark,
         }}
          >
           <ConvexClientProvider>

             {/* 🔥 ADD THIS */}
             <UserSync />
          
        {/* Header */}
        <Header />
        
        {/* <main className="relative min-h-screen container mx-auto pt-40 md:pt-32 ">
          
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
             <div className="absolute top-0 left-1/5 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"/>
             <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"/>

          </div>

          <div className="relative z-10 min-h-[70vh]">{children}</div>

         
          <footer className="border-t border-gray-800/50 py-8 px-6 max-w-7x1 mx-auto">
            <div className="text-sm text-gray-400">
              Made with ❤️ by SpotX-AI Team
            </div>
          </footer>
          <Toaster richColors />
        </main> */}
        
        <main className="relative min-h-screen pt-40 md:pt-32">

  {/* glow */}
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-0 left-1/5 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"/>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"/>
  </div>

  {/* GLOBAL WIDTH SYSTEM */}
  <div className="max-w-[1350px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

    <div className="relative z-10 min-h-[70vh]">{children}</div>

  </div>
        
{/* ================= FOOTER ================= */}
<footer className="relative mt-8 border-t border-gray-800/90 bg-black/80 text-white backdrop-blur-xl">

  <div className="mx-auto w-full max-w-[1350px] px-6 py-10 lg:px-12">

    {/* FOOTER CONTENT */}
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

      {/* BRAND */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left">

        <Image
          src="/logo1.png"
          alt="SPOTX"
          width={300}
          height={120}
          className="h-auto w-[150px] object-contain"
          priority
        />

        <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
          Discover, create, and promote amazing events with the
          AI-powered tools designed for organizers and attendees.
        </p>

        {/* SOCIAL ICONS */}
        <div className="mt-5 flex items-center gap-3">

          <a
            href="https://github.com/Akashprajapati010"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition hover:bg-white/10 hover:text-white"
          >
            <FaGithub size={17} />
          </a>

          <a
            href="https://www.linkedin.com/in/akash-prajapati-521278256/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400"
          >
            <FaLinkedin size={17} />
          </a>

          <a
            href="mailto:akashak5654@gmail.com"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition hover:bg-red-500/10 hover:text-red-400"
          >
            <FaEnvelope size={15} />
          </a>

        </div>
      </div>


      {/* EXPLORE */}
      <div>
        <h3 className="mb-4 text-sm font-semibold text-white">
          Explore
        </h3>

        <ul className="space-y-3 text-sm text-gray-400">

          <li>
            <a
              href="/explore"
              className="transition-colors hover:text-white"
            >
              Discover Events
            </a>
          </li>

          <li>
            <a
              href="/explore"
              className="transition-colors hover:text-white"
            >
              Upcoming Events
            </a>
          </li>

          <li>
            <a
              href="/my-tickets"
              className="transition-colors hover:text-white"
            >
              My Tickets
            </a>
          </li>

          <li>
            <a
              href="/explore"
              className="transition-colors hover:text-white"
            >
              Categories
            </a>
          </li>

        </ul>
      </div>


      {/* ORGANIZERS */}
      <div>
        <h3 className="mb-4 text-sm font-semibold text-white">
          For Organizers
        </h3>

        <ul className="space-y-3 text-sm text-gray-400">

          <li>
            <a
              href="/create-event"
              className="transition-colors hover:text-white"
            >
              Create Event
            </a>
          </li>

          <li>
            <a
              href="/my-events"
              className="transition-colors hover:text-white"
            >
              Organizer Dashboard
            </a>
          </li>

          <li>
            <a
              href="/#"
              className="transition-colors hover:text-white"
            >
              Pricing
            </a>
          </li>

          <li>
            <a
              href="/explore"
              className="transition-colors hover:text-white"
            >
              Event Analytics
            </a>
          </li>

        </ul>
      </div>


      {/* FEATURES */}
      <div>
        <h3 className="mb-4 text-sm font-semibold text-white">
          SPOTX Features
        </h3>

        <ul className="space-y-3 text-sm text-gray-400">

          <li>AI Event Creation</li>
          <li>AI Recommendations</li>
          <li>QR Ticketing</li>
          <li>Razorpay Payments</li>
          <li>Event Analytics</li>

        </ul>
      </div>

    </div>


    {/* DIVIDER */}
    <div className="my-8 border-t border-gray-800/80" />


    {/* BOTTOM */}
    <div className="flex flex-col items-center justify-center gap-2 text-center text-xs text-gray-500 lg:flex-row lg:justify-between">

      <p>
        © 2026 SPOTX. All rights reserved.
      </p>

      <p>
        Made with <span className="text-red-500">♥</span> by{" "}
        <span className="font-medium text-gray-300">
          Akash Prajapati
        </span>
      </p>

    </div>

  </div>
</footer>



  <Toaster richColors />
</main>
           </ConvexClientProvider>
          </ClerkProvider>
          </ThemeProvider>
        
        {/* Footer */}
        </body>
    </html>
  );
}
