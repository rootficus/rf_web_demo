import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'RFBiTE Android Services',
  description:
    'Deploy top-tier Android developers with specialized skills tailored to your business needs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-poppins font-sans bg-background text-foreground`}>
        <div className="relative w-full min-h-screen overflow-x-hidden">
          <main className="w-full max-w-screen-2xl mx-auto px-4 md:px-12 lg:px-24">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
