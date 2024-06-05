import { FC, useState, useEffect, useRef, useCallback } from "react";
import styles from "./projectsSlider.module.scss";
import data from "../../data/data.json";
import cn from "classnames";
import { Bento } from "../bento/bento";
import { Project } from "../project/project";
import { ProjectType } from "../../types/projectType";
import { register } from "swiper/element/bundle";

register();

export const ProjectsSlider: FC = () => {
    const [projectsData, setProjectsData] = useState<ProjectType[]>();
    const [sliderProgress, setSliderProgress] = useState<number>(0);
    const [animated, setAnimated] = useState<boolean>(false);
    const swiperElRef = useRef<null | HTMLDivElement>(null);

    const slideChange = (e: any) => {
        const [swiper] = e.detail;
        setSliderProgress(swiper.activeIndex);
        setAnimated(true);
    };

    useEffect(() => {
        setProjectsData(data.projects as ProjectType[]);
        swiperElRef.current?.addEventListener("swiperslidechange", slideChange);
        return () => {
            swiperElRef.current?.removeEventListener("swiperslidechange", slideChange);
        };
    }, []);

    const handlePrev = useCallback(() => {
        if (!swiperElRef.current) return;
        //@ts-ignore
        swiperElRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!swiperElRef.current) return;
        //@ts-ignore
        swiperElRef.current.swiper.slideNext();
    }, []);

    const animatedClass = animated ? `${styles.animated}` : `${styles.visible}`;
    const prevHiddenClass = sliderProgress === 0 ? `${styles.hidden}` : animatedClass;
    const nextHiddenClass = sliderProgress === data.projects.length - 1 ? `${styles.hidden}` : animatedClass;

    return (
        <div className={cn(styles.projects)}>
            <swiper-container ref={swiperElRef} space-between={140} centered-slides={true} navigation="false" className="project-swiper">
                {typeof projectsData !== "undefined" ? (
                    projectsData.map((project, index) => (
                        <swiper-slide key={index} lazy="lazy" data-slide="slide">
                            <Bento>
                                <Project {...project} />
                            </Bento>
                        </swiper-slide>
                    ))
                ) : (
                    <p>There are no projects yet...</p>
                )}
            </swiper-container>
            <button className={cn(styles.nav_button, styles.prev, prevHiddenClass)} onClick={handlePrev} onAnimationEnd={() => setAnimated(false)}>
                <svg width="71" height="33" viewBox="0 0 71 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M49.8365 25.9423L59.3942 16.3846L49.8365 6.8269" stroke="white" strokeOpacity={sliderProgress === 0 ? "1" : sliderProgress === 1 ? "0.5": "0.2"} strokeWidth="2.73077" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M30.7211 25.9423L40.2788 16.3846L30.7211 6.8269" stroke="white" strokeOpacity={sliderProgress === 1 ? "1": "0.5"} strokeWidth="2.73077" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.6058 25.9423L21.1634 16.3846L11.6058 6.8269" stroke="white" strokeOpacity={sliderProgress === 0 ? "0.2" : sliderProgress === 1 ? "0.5": "1"} strokeWidth="2.73077" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>
                    Previous Project
                </span>
            </button>
            <button className={cn(styles.nav_button, styles.next, nextHiddenClass)} onClick={handleNext} onAnimationEnd={() => setAnimated(false)}>
                <svg width="71" height="33" viewBox="0 0 71 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M49.8365 25.9423L59.3942 16.3846L49.8365 6.8269" stroke="white" strokeOpacity={sliderProgress === 0 ? "0.2" : sliderProgress === 1 ? "0.5": "1"} strokeWidth="2.73077" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M30.7211 25.9423L40.2788 16.3846L30.7211 6.8269" stroke="white" strokeOpacity={sliderProgress === 1 ? "1": "0.5"} strokeWidth="2.73077" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.6058 25.9423L21.1634 16.3846L11.6058 6.8269" stroke="white" strokeOpacity={sliderProgress === 0 ? "1" : sliderProgress === 1 ? "0.5": "0.2"} strokeWidth="2.73077" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>
                    Next Project
                </span>
            </button>
        </div>
    );
};
