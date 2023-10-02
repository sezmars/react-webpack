import {useState} from "react";
import styles from "./Counter.module.scss";

console.log(styles)
export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.counter}>
            <h1>Hello CodeSandbox</h1>
            <h2>You clicked {count} times!</h2>

            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
