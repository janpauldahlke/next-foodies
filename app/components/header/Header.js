import Link from "next/link";
import Image from "next/image";

import GradientForLayout from "./gradient/Gradient";
import Navigation from "../navigation/navigation";

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
        <Navigation />
      </header>
    </>
  ) 
}

export default Header;