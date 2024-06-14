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
            <swiper-container ref={swiperElRef} space-between={58} centered-slides={true} navigation="false" className="project-swiper">
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
            <button className={cn(styles.nav_button, styles.prev, prevHiddenClass)} aria-label="Previous Project" onClick={handlePrev} onAnimationEnd={() => setAnimated(false)}>
                <svg width="21" height="39" viewBox="0 0 21 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.1815 1.00006L1.00003 19.1815L19.1815 37.363" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button className={cn(styles.nav_button, styles.next, nextHiddenClass)} aria-label="Next Project" onClick={handleNext} onAnimationEnd={() => setAnimated(false)}>
                <svg width="21" height="39" viewBox="0 0 21 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.1815 1.00006L1.00003 19.1815L19.1815 37.363" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
};
