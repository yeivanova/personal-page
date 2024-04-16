import { FC } from "react";
import styles from "./header.module.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <ul className={styles.navigation_list}>
                    <li>
                        <AnchorLink href="#about" offset="50">
                            About
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#work" offset="50">
                            Work
                        </AnchorLink>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://t.me/yeivanova" className={styles.button}>
                            Send me a message
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
