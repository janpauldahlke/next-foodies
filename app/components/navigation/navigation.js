'use client';

import NavLink from './navlink/navlink';
import styles from './navigation.module.css'

const Navigation = () => { 

  return (
    <nav className={styles.nav}>
    <ul>
      <li>
        <NavLink href="/meals">Browse meals</NavLink>
      </li>
      <li>
        <NavLink href="/community">Community</NavLink>
      </li>
    </ul>
  </nav>
    )
}

export default Navigation;