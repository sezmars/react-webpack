import useTheme from "../theme/useTheme";
import {Theme} from "../theme/ThemeContext";
import styles from "./ThemeToggle.module.scss";
import {HiOutlineMoon, HiOutlineSun} from "react-icons/hi2";

function ThemeToggle() {
    const {theme, toggleTheme} = useTheme();

    return (
        <button className={styles.button} onClick={toggleTheme}>
            {theme === Theme.DARK ? <HiOutlineSun/> : <HiOutlineMoon/>}
        </button>
    );
}

export default ThemeToggle;
