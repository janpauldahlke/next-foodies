import Link from "next/link";
import Image from "next/image";

import GradientForLayout from "./gradient/Gradient";
import logoImg from '@/assets/logo.png'
import styles from './Header.module.css'

const Header = () => { 
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
              <Link href="/meals" >Browse meals</Link>
            </li>
            <li>
            <Link href="/community" >Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  ) 
}

export default Header;