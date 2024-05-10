import { FC, useState, useEffect, useRef } from "react";
import styles from "./scrollList.module.scss";
import cn from "classnames";
import { useInView } from "react-intersection-observer";

type ScrollListProps = {
    list: string[];
};

export const ScrollList: FC<ScrollListProps> = ({ list }) => {
    const [listIsScrolled, setListIsScrolled] = useState<boolean>(false);
    const [ref, inView] = useInView({
        threshold: 0.25,
    });

    const scrollToRef = useRef<null | HTMLLIElement>(null);

    useEffect(() => {
        if (inView) {
            setListIsScrolled(true);
        }
    }, [inView]);

    useEffect(() => {
        if (scrollToRef.current && listIsScrolled) {
            scrollToRef.current.offsetParent!.scrollTo({ top: 100, behavior: "smooth" });
        }
    }, [listIsScrolled]);

    return (
        <div className={cn(styles.scroll_list_container, "scrollbar-hidden")} ref={ref}>
            <ul className={styles.scroll_list}>
                {list.map((item, index) => (
                    <li className="animate-it" key={index} ref={index === 0 ? scrollToRef : null}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
