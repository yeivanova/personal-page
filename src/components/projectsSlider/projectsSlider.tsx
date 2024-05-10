import { FC, useState, useEffect, useRef } from "react";
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
    const swiperElRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        setProjectsData(data.projects as ProjectType[]);
    }, []);

    return (
        <div className={cn(styles.projects)}>
            <swiper-container ref={swiperElRef} space-between={40} centered-slides={true} navigation="true" className="project-swiper">
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
        </div>
    );
};
