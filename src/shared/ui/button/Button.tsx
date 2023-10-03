import styles from "./Button.module.scss";
import {ReactNode} from "react";

export const Button = ({children, onClick}: { children: ReactNode, onClick: () => void }) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}>{children}</button>
    );
};
