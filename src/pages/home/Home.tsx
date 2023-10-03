import styles from "./Home.module.scss";
import {Counter} from "entities/counter/Counter";

const Home = () => {
    return (
        <div className={styles.container}>
            <Counter/>
        </div>
    );
};
export default Home
