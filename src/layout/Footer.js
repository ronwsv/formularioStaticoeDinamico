import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
      </div>
      <ul className={styles.social_list}>
        <div className={styles.copyright}>
        <ul >Copyright 2024 Netimóveis Brasil SA. Todos os direitos reservados.</ul>
        </div>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;