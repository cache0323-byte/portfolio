type NavItem = {
  label: string
  href: string
}

type Props = {
  items: NavItem[]
}

export const NavList = ({ items }: Props) => {
  return (
    <ul className="flex gap-6">
      {items.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className="text-noto  tracking-widest hover:opacity-70"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
