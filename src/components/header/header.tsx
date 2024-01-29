import { FC } from "react";
import styles from './header.module.scss';

export const Header: FC = () => {
  return (
      <header className="content-grid">
      <nav className={styles.navigation}>
          <ul className="header">
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
          <li><a href="#form" className={styles.button}>Send me a message</a></li>
          </ul>
        </nav>
      </header>
  );
}
