type NavItem = {
  label: string
  href: string
}

type Props = {
  items: NavItem[]
}

export const NavList = ({ items }: Props) => {
  return (
    <ul className="flex gap-10">
      {items.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className="tracking-widest
                       hover:opacity-70
                       font-bold
                       text-[var(--primary-brown)]
                       font-[var(--font-noto-serif-jp)]">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
