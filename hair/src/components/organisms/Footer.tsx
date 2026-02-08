import { Logo } from '../atoms/Logo'
import { NavList } from '../atoms/NavList'

const footerNavItems = [
    { label: '会社概要', href: '/#fv' },
    { label: '個人情報の取扱いについて', href: '/#fv' },
    { label: '特定商取引に基づく表記', href: '/#fv' },
    { label: 'お問い合わせ', href: '/#fv' },
]

export const Footer = () => {
    return (
        <footer
            className="
                flex flex-col 
                items-center 
                bg-[var(--primary-pink)]/5
                pt-16 pd-0
            ">
            <div className="mb-12">
                <Logo vertical />
            </div>
            <nav className="mb-12">
                <NavList items={footerNavItems} />
            </nav>
            <div 
                className="
                    w-full 
                    bg-[var(--primary-brown)]
                    py-4 
                    text-center
                ">
                <small 
                    className="
                        text-[14px] 
                        tracking-widest 
                        text-white
                        ">
                    &copy;2026 Sui All Rights Reserved.
                </small>
            </div>
        </footer>
    );
};