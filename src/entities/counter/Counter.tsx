import {useState} from "react";
import styles from "./Counter.module.scss";
import {Button} from "shared/ui/button/Button";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.counter}>
            <h2>You clicked {count} times!</h2>

            <Button onClick={() => setCount(count - 1)}>-</Button>
            <Button onClick={() => setCount(count + 1)}>+</Button>
        </div>
    );
};
