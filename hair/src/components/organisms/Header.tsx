import {Logo} from '../atoms/Logo'
import { NavList } from '../atoms/NavList'

const navItems = [
  { label: 'MESSAGE', href: '/message' },
  { label: 'CHECK IT', href: '/check' },
  { label: 'PRODUCT', href: '/product' },
]

export const Header = () => {
  return (
    <header className="fixed top-10 z-50 w-full bg-[var(--primary-pink)]/5">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <NavList items={navItems} />
      </div>
    </header>
  )
}
