import { FC, useState, useEffect } from "react";
import styles from "./project.module.scss";
import cn from "classnames";
import linkIcon from "../../images/icons/link.svg";
import { ProjectType } from "../../types/projectType";

export const Project: FC<ProjectType> = ({ name, description, type, previews, link, codeLink }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex < previews.length - 1 ? prevIndex + 1 : 0));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.project}>
            <div className={styles.col_img}>
                {previews?.map((image, index) => (
                    <img className={cn(styles.image, index === currentImageIndex ? styles.active : "")} src={require(`../../images/screenshots/${image}`)} key={index} alt={`${name} Preview`} />
                ))}
            </div>
            <div className={styles.col_content}>
                <div>
                    <span className={styles.tag}>{type}</span>
                    <h3 className={styles.title}>{name}</h3>
                    <p className={styles.text}>{description}</p>
                </div>

                <div className={styles.links}>
                    <a className={cn(styles.link, styles.web_link)} href={link} target="_blank" rel="noreferrer">
                        <img className={styles.link_icon} src={linkIcon} width="12" height="12" alt="" />
                        <span>Check it out</span>
                    </a>
                    <a className={cn(styles.link, styles.code_link)} href={codeLink} target="_blank" rel="noreferrer">
                        <span>Code here</span>
                    </a>
                </div>
            </div>
        </div>
    );
};
