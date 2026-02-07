import { Logo } from'../atoms/Logo'
import { NavList } from'../atoms/NavList'

const footerNavItems =[
    { label:'会社概要', href:'#'},
    { label:'個人情報の取扱いについて', href:'#'},
    { label:'特定商取引に基づく表記', href:'#'},
    { label:'お問い合わせ', href:'#'},
]

export const Footer = () => {
    return(
        <footer className="flex flex-col items-center bg-[var(--primary-pink)]/5 py-16">
        <div className="mb-10">
            <Logo vertical />
        </div>
        <nav className="mb-10">
            <NavList items={footerNavItems} />
        </nav>
        <div className="w-full bg-[var(--primary-brown)] py-3 text-center">
        <small className="text-[10px] tracking-widest text-white">
            &copy;2026 Sui All Rights Reserved.
        </small>
        </div>
        </footer>
    )
}