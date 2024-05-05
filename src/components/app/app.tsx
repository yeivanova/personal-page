import { FC, useState } from "react";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Bento } from "../bento/bento";
import { ScrollList } from "../scrollList/scrollList";
import cn from "classnames";
import styles from "./app.module.scss";
import tag from "../../images/tag@2x.png";
import arrow from "../../images/arrow@2x.png";

export const App: FC = () => {
    const [viewMore, setViewMore] = useState<boolean>(false);

    return (
        <div className={styles.app}>
            <Header />
            <main className={styles.main} id="wrapper">
                <section className={styles.section} id="about">
                    <div className={cn(styles.col, styles.full_width)}>
                        <h1>Hey! I’m Elena</h1>
                        <Bento>
                            <p>
                                I am an experienced <span className={styles.hightlighted}>frontend developer</span> with a strong passion for building effective websites.
                                <br /> ✨ My goal is to ensure that every pixel is precisely aligned and every element of UI functions seamlessly, providing users with an intuitive and efficient digital experience.
                                <br />I get great inspiration from modern web design and I feel excitement when starting to work with a new design markup 🌟
                            </p>
                        </Bento>
                    </div>
                    <div className={cn(styles.col, styles.col_button)}>
                    <a className={styles.vertical_link} href="https://t.me/yeivanova" target="_blank" rel="noreferrer">Send me a message</a>
            
                    </div>
                    <div className={cn(styles.col, styles.col_1)}>
                        <h2>My stack</h2>
                        {/* <h3>The technologies I&nbsp;use most often:</h3> */}
                        <ScrollList list={["HTML & CSS", "LESS/SCSS/Stylus", "JavaScript, TypeScript", "React JS, Redux", "Jest, Cypress", "Gulp, Webpack", "Git", "Figma"]} />
                    </div>
                    <div className={cn(styles.col, styles.col_image)}>
                        <img className={styles.tag_img} src={tag} alt="" />
                    </div>
                </section>

                <section className={styles.section} id="work">
                    <div className={cn(styles.col, styles.full_width)}>
                        <h2 className="no_margin">Here is a list of my open source projects,<br /> web apps and experiments</h2>
                    </div>
                    <div className={cn(styles.col, styles.full_width)}>
                        <Bento>
                            <h3>Projects</h3>
                            <ul className={styles.text_list}>
                                <li>
                                    The private coasters collection,{" "}
                                    <a className={cn(styles.link, styles.hightlighted)} href="https://munyabrew.ru/" target="_blank" rel="noreferrer">
                                        Munyabrew.ru
                                    </a>
                                </li>
                                <li>
                                    Landing page about the{" "}
                                    <a className={cn(styles.link, styles.hightlighted)} href="https://yeivanova.github.io/gorodki/" target="_blank" rel="noreferrer">
                                        Gorodki game
                                    </a>
                                </li>
                                <li>
                                    <a className={cn(styles.link, styles.hightlighted)} href="https://yeivanova.github.io/react-burger/" target="_blank" rel="noreferrer">
                                        Space burgers
                                    </a>{" "}
                                    app
                                </li>
                            </ul>
                        </Bento>
                    </div>
                    {/* <div className={cn(styles.col, styles.col_1)}>
                        <Bento>
                            <h3>Articles</h3>
                            <ul className={styles.text_list}>
                                <li>
                                    Creating segment chart using D3.js and React: a step-by-step tutorial,{" "}
                                    <a
                                        className={cn(styles.link, styles.hightlighted)}
                                        href="https://medium.com/@yeivanova/creating-segment-chart-using-d3-js-and-react-a-step-by-step-tutorial-961a9da26ea8"
                                        target="_blank"
                                        rel="noreferrer">
                                        read
                                    </a>
                                </li>
                            </ul>
                        </Bento>
                    </div>
                    
                    <div className={cn(styles.col, styles.col_2)}>
                        <Bento>
                            <h3>Certificates</h3>
                            <ul className={styles.text_list}>
                                <li>Principles of UX/UI Design, Meta, 2024</li>
                                <li>Certificate in Advanced English, Cambridge English, 2023</li>
                                <li>Front End Development Libraries, freeCodeCamp, 2023</li>
                                <li>JavaScript Algorithms and Data Structures, freeCodeCamp, 2023</li>
                                <li className={viewMore ? "visible" : "hidden"}>Responsive Web Design, freeCodeCamp, 2023</li>
                                <li className={viewMore ? "visible" : "hidden"}>React developer, Yandex Practicum, 2022</li>
                            </ul>
                            <button className={cn(styles.more, styles.link, styles.hightlighted)} onClick={() => setViewMore(!viewMore)}>
                                view {viewMore ? "less" : "more"}
                            </button>
                        </Bento>
                    </div> */}

                    <div className={cn(styles.col, styles.col_1)}>
                        <img className={styles.arrow_img} src={arrow} alt="" />
                    </div>
                    <div className={cn(styles.col, styles.col_2)}>
                        <div className={styles.text_wrapper}>
                            <h3>Send me a&nbsp;massage</h3>
                            <p>
                                Got a question or proposal, <br />or&nbsp;just want to say hello? <br />
                                <a className={cn(styles.link, "font-bold")} href="https://t.me/yeivanova" target="_blank" rel="noreferrer">
                                    Go ahead
                                </a>
                            </p>
                        </div>
                       
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};
