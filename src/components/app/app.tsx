import { FC } from "react";
import { Header } from "../header/header";
import { Bento } from "../bento/bento";
import { ScrollList } from "../scrollList/scrollList";
import { SocialLinks } from "../socialLinks/socialLinks";
import cn from "classnames";
import styles from "./app.module.scss";
import tag from "../../images/tag@2x.png";
import arrow from "../../images/arrow@2x.png";

export const App: FC = () => {
    return (
        <div className={styles.app}>
            <Header />
            <main className={styles.main} id="wrapper">
                <div className={cn(styles.col, styles.full_width)} id="about">
                    <Bento>
                        <h1>Hey! I’m Elena</h1>
                        <p className={styles.two_col_text}>
                            I am an experienced <span className={styles.hightlighted}>frontend developer</span><br /> with a strong passion for building effective websites.
                            <br /> ✨ <span className={styles.underlined}>My goal</span> is to ensure that every pixel is precisely aligned and every element of UI functions seamlessly, providing users with an intuitive and efficient digital experience.
                            <br />I get great <span className={styles.underlined}>inspiration</span> from modern web design and I feel excitement when starting to work with a new design markup 🌟
                        </p>
                    </Bento>
                </div>
                <div className={cn(styles.col, styles.col_aside)}>
                    <a className={styles.vertical_link} href="https://t.me/yeivanova" target="_blank" rel="noreferrer">
                        ⚡️ &nbsp;Send me a message&nbsp; ⚡️
                    </a>
                </div>
                <div className={cn(styles.col, styles.col_1)}>
                    <h2 className={"align_center"}>My stack</h2>
                    <ScrollList list={["HTML & CSS", "LESS/SCSS/Stylus", "JavaScript, TypeScript", "React JS, Redux", "Jest, Cypress", "Gulp, Webpack", "Git", "Figma"]} />
                </div>
                <div className={cn(styles.col, styles.col_2, styles.center_wrapper)}>
                    <img className={styles.tag_img} src={tag} alt="" />
                </div>
                <div className={cn(styles.col, styles.col_aside, styles.sticky)}>
                    <SocialLinks />
                </div>

                <div className={cn(styles.col, styles.full_width)} id="projects">
                    <h2>
                        Here is a list of my open source projects,
                        <br /> web apps and experiments
                    </h2>
                    <Bento>
                        <h3>Projects</h3>
                        <ul className={styles.text_list}>
                            <li>
                                The private coasters collection,{" "}
                                <a className={cn(styles.link)} href="https://munyabrew.ru/" target="_blank" rel="noreferrer">
                                    Munyabrew.ru
                                </a>
                            </li>
                            <li>
                                Landing page about the{" "}
                                <a className={cn(styles.link)} href="https://yeivanova.github.io/gorodki/" target="_blank" rel="noreferrer">
                                    Gorodki game
                                </a>
                            </li>
                            <li>
                                <a className={cn(styles.link)} href="https://yeivanova.github.io/react-burger/" target="_blank" rel="noreferrer">
                                    Space burgers
                                </a>{" "}
                                app
                            </li>
                        </ul>
                    </Bento>
                </div>

                <div className={cn(styles.col, styles.col_1)} id="contacts">
                    <img className={styles.arrow_img} src={arrow} alt="" />
                </div>
                <div className={cn(styles.col, styles.col_2, styles.center_wrapper)}>
                    <div className={styles.text_wrapper}>
                        <h3>Send me a&nbsp;massage</h3>
                        <p>
                            Got a question or proposal, <br />
                            or&nbsp;just want to say hello? <br />
                            <a className={cn(styles.link, "font-bold")} href="https://t.me/yeivanova" target="_blank" rel="noreferrer">
                                Go ahead
                            </a>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};
