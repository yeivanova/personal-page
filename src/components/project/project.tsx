import { FC } from "react";
import styles from "./project.module.scss";
import linkIcon from "../../images/icons/link.svg";
import { ProjectType } from "../../types/projectType";
import cn from "classnames";

export const Project: FC<ProjectType> = ({ name, description, type, image, link, codeLink }) => {
    return (
        <div className={styles.project}>
            <div className={styles.col_img}>
                <img className={styles.image} src={require(`../../images/screenshots/${image[0]}`)} alt="Preview" />
            </div>
            <div className={styles.col_content}>
                <div className={styles.tag}>{type}</div>
                <h3 className={styles.title}>{name}</h3>
                <div className={styles.text}>{description}</div>
                <div className={styles.links}>
                    <a className={cn(styles.link, styles.web_link)} href={link} target="_blank" rel="noreferrer">
                        <img className={styles.link_icon} src={linkIcon} width="12" height="12" alt="" />
                        Check it out
                    </a>
                    <a className={cn(styles.link, styles.code_link)} href={codeLink} target="_blank" rel="noreferrer">
                        Code here
                    </a>
                </div>
            </div>
        </div>
    );
};
