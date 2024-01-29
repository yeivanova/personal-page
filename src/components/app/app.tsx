import { FC } from "react";
import { Header } from "../header/header";
import { Bento } from "../bento/bento";
import cn from "classnames";
import styles from "./app.module.scss";
import tag from "../../images/tag@2x.png";
import CV from "../../files/Elena_Ivanova_CV.pdf";

export const App: FC = () => {
    return (
        <div className={styles.app}>
            <Header />
            <main className={cn(styles.main, "flow", "content-grid")}>
                <section className={styles.full_width}>
                    <h1>Hey! I’m Elena</h1>
                    <Bento>
                        <p>
                            I am an experienced web developer with a strong passion for building effective web-sites. My professional interests include UX, web animations, accessibility techniques. I get great
                            inspiration from modern web design and I feel excitement when starting to work with a new design markup 🌟
                        </p>
                    </Bento>
                </section>

                <section className={styles.col_1}>
                    <h2>My stack</h2>
                    <Bento>
                        <h3>My stack of technologies includes:</h3>
                        <ul>
                            <li>JavaScript (ES6), React JS, Redux, TypeScript;</li>
                            <li>HTML5, CSS/LESS/SCSS</li>
                            <li>Jest, Cypress</li>
                            <li>Gulp, Webpack</li>
                            <li>Git</li>
                            <li>PHP, Laravel, Wordpress</li>
                            <li>Figma, Adobe Photoshop</li>
                        </ul>
                    </Bento>
                </section>

                <section className={styles.col_2}>
                    <h2>CV</h2>
                    <Bento>
                        <h3 className={styles.h3}>
                            You can download my CV&nbsp;
                            <a href={CV} className={cn(styles.link, "font-bold")} download="CV-PDF-document" target="_blank" rel="noreferrer">
                                here
                            </a>
                        </h3>
                    </Bento>
                    <img src={tag} alt="" />
                </section>
            </main>
        </div>
    );
};
