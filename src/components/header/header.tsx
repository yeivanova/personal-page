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
                        <AnchorLink href="#projects" offset="50">
                            Projects
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#contacts" offset="50">
                            Contacts
                        </AnchorLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
