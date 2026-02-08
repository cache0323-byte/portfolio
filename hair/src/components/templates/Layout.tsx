import { ReactNode } from 'react'
import { Header } from '../organisms/Header'
import { Footer } from '../organisms/Footer'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div 
      className="
        min-h-screen
        flex 
        flex-col
      ">
      <Header />
      <main 
        className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}