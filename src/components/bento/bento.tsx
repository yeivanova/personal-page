import { FC, ReactNode } from "react";
import cn from "classnames";
import styles from './bento.module.scss';

type BentoProps = {
  children: ReactNode;
  className?: string;
}

export const Bento: FC<BentoProps> = ({ children, className }) => {
  return (
    <div className={cn(styles.bento, (typeof className !== "undefined") && className)}>
      { children }
    </div>
  );
}
