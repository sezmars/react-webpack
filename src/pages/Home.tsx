import {Counter} from "shared/components/Counter";
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.container}>
            <Counter/>
        </div>
    );
};
export default Home
