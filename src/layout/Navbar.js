import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
      <div className={styles.logo}>
        {/* <Link to="/"><img src="logo-laranja.svg" width="160" height="43" alt="Logo" /></Link> */}
      </div>
      <button className={styles.menuButton}>
        Menu
      </button>
      <ul className={styles.navList}>
        {/* <li className={styles.navItem}>
          <Link to="/">Formulario</Link>
        </li> */}
        {/* <li className={styles.navItem}>
          <Link to="/contato">Contato</Link>
        </li> */}
      </ul>
    </nav>
    )
}

export default Navbar
