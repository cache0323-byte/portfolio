import Link from 'next/link'

type NavItem = {
  label: string
  href: string
}

type Props = {
  items: NavItem[]
}

export const NavList = ({ items}: Props) => {
  return (
    <ul className="flex gap-10">
      {items.map((item,i) => (
        <li key={i}>
          <Link
            href={item.href}
            className="tracking-widest
                       hover:opacity-70
                       font-bold
                       text-[var(--primary-brown)]
          ">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
