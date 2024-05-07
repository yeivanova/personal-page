import { FC } from "react";
import styles from "./socialLinks.module.scss";
import github from "../../images/icons/github.svg";
import linkedin from "../../images/icons/linkedin.svg";
import medium from "../../images/icons/medium.svg";
import instagram from "../../images/icons/instagram.svg";
import email from "../../images/icons/email.svg";

export const SocialLinks: FC = () => {
    return (
        <section className={styles.social_links_wrapper}>
            <h3>Find me&nbsp;in:</h3>
            <ul className={styles.social_links}>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/yeivanova/">
                        <img className={styles.icon} src={github} alt="GitHub" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yeivanova/">
                        <img className={styles.icon} src={linkedin} alt="LinkedIn" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://medium.com/@yeivanova">
                        <img className={styles.icon} src={medium} alt="Medium" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/lena_v_ivanova/">
                        <img className={styles.icon} src={instagram} alt="Instagram" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="mailto:yeivanova@gmail.com">
                        <img className={styles.icon} src={email} alt="Gmail" />
                    </a>
                </li>
            </ul>
        </section>
    );
};
