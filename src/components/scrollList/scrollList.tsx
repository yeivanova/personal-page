import { FC, useEffect, useRef } from "react";
import styles from "./scrollList.module.scss";
import cn from "classnames";

type ScrollListProps = {
    list: string[];
};

export const ScrollList: FC<ScrollListProps> = ({ list }) => {
	const scrollToRef = useRef<null | HTMLLIElement>(null);
	
	useEffect(() => {
		if( scrollToRef.current ) {
			scrollToRef.current.scrollIntoView();
		}
	}, []);

	return (
		<div className={cn(styles.scroll_list_container, "scrollbar_hidden")}>
			<ul className={styles.scroll_list}>
				{list.map((item, index) => <li key={index} ref={ index === 0 ? scrollToRef : null } >{item}</li>)}
			</ul>
		</div>);
};
