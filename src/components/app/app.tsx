import { FC, useState, useEffect } from "react";
import { Header } from "../header/header";
import { Bento } from "../bento/bento";
import { ProjectsSlider } from "../projectsSlider/projectsSlider";
import { ScrollList } from "../scrollList/scrollList";
import { SocialLinks } from "../socialLinks/socialLinks";
import cn from "classnames";
import styles from "./app.module.scss";
import tag from "../../images/tag@2x.png";
import arrow from "../../images/arrow@2x.png";

export const App: FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768 ? true : false);
    const [windowDimension, setWindowDimension] = useState<number | null>(null);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
        windowDimension && windowDimension < 768 ? setIsMobile(true) : setIsMobile(false);
    }, [windowDimension, isMobile]);

    useEffect(() => {
        function handleWindowResize() {
            setWindowDimension(window.innerWidth);
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <div className={styles.app}>
            <Header />
            <main className={styles.main} id="wrapper">
                <section className={styles.section} id="about">
                    <div className={cn(styles.col, styles.full_width)}>
                        <Bento>
                            <h1>
                                <span className="showup">Hey!&nbsp;</span>{" "}
                                <span className="reveal">
                                    <span className="slidein">I’m Elena</span>
                                </span>
                            </h1>
                            <p className={styles.two_col_text}>
                                I am an experienced <br />
                                <span className="hightlighted">frontend developer</span>
                                <br /> with a strong passion for building effective websites.
                                <br /> ✨ <span className="underlined">My goal</span> is to ensure that every pixel is precisely aligned and every element of UI functions seamlessly, providing users with an intuitive and
                                efficient digital experience.
                                <br />I get great <span className={cn("underlined", "underlined2")}>inspiration</span> from modern web design and I feel excitement when starting to work with a new design markup 🌟
                            </p>
                        </Bento>
                    </div>
                    <div className={cn(styles.col, styles.col_aside)}>
                        <a className={styles.vertical_link} href="https://t.me/yeivanova" target="_blank" rel="noreferrer">
                            ⚡️ &nbsp;Send me a message&nbsp; ⚡️
                        </a>
                    </div>
                </section>
                <section className={styles.section} id="stack">
                    <div className={cn(styles.col, styles.col_1)}>
                        <h2 className={"align-center"}>My stack</h2>
                        <ScrollList list={["HTML & CSS", "LESS/SCSS/Stylus", "JavaScript, TypeScript", "React JS, Redux", "Jest, Cypress", "Gulp, Webpack", "Git", "Figma"]} />
                    </div>
                    <div className={cn(styles.col, styles.col_2, styles.center_wrapper)}>
                        <img className={styles.tag_img} src={tag} alt="" />
                    </div>
                    {!isMobile && (
                        <div className={cn(styles.col, styles.col_aside, styles.sticky)}>
                            <SocialLinks />
                        </div>
                    )}
                    <div className={cn(styles.col, styles.full_width, styles.col_projects_header)}>
                        {" "}
                        <h2>
                            Here is a list of my open source projects,
                            <br /> web apps and experiments
                        </h2>
                    </div>
                </section>

                <section id="projects" className={styles.col_projects}>
                    <div className={cn(styles.col, styles.full_width)}>
                        <ProjectsSlider />
                    </div>
                </section>

                <section className={cn(styles.section, styles.section_contacts)} id="contacts">
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
                </section>
                {isMobile && (
                    <div className={cn(styles.col, styles.col_aside, styles.sticky)}>
                        <SocialLinks />
                    </div>
                )}
            </main>
        </div>
    );
};
