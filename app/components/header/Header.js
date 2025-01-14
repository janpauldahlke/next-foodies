import Link from "next/link";
import logoImg from '@/assets/logo.png'

import styles from './Header.module.css'

const Header = () => { 
  return (
    <>
      <header className={styles.header}>
        <Link className={ styles.logo}  href="/" >
          <img src={logoImg.src} alt="Logo" />
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