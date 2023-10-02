import {useState} from "react";
import styles from "./Counter.module.scss";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.counter}>
            <h2>You clicked {count} times!</h2>

            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
