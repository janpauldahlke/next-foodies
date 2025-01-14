'use client';

import Link from "next/link";
import Image from "next/image";

import GradientForLayout from "./gradient/Gradient";
import logoImg from '@/assets/logo.png'
import styles from './Header.module.css'
import { usePathname } from "next/navigation";

const Header = () => { 

  const path = usePathname()

  return (
    <>
      <GradientForLayout></GradientForLayout>
      <header className={styles.header}>
        <Link className={ styles.logo}  href="/" >
          <Image src={logoImg} alt="Logo" priority/>
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals" className={path.startsWith('/meals') ? styles.active : undefined}>Browse meals</Link>
            </li>
            <li>
              <Link href="/community" className={ path === '/community' ? styles.active : undefined}>Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  ) 
}

export default Header;