import { ReactNode } from 'react'
import Header from '@/components/common/Header'
import Footer from '@/components/common/footer/Footer'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <Header />
    <main className="relative z-[2] flex flex-col items-center px-4 md:px-12 lg:px-24 py-8 space-y-24">
      {children}
    </main>
    <Footer />
  </>
)

export default MainLayout