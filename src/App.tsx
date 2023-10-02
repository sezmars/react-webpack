import React, {lazy, Suspense} from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import useTheme from "./theme/useTheme";
import ThemeToggle from "./components/ThemeToggle";
import {classNames} from "./helpers/classNames/classNames";

const About = lazy(() => import('./pages/About'));
const Home = lazy(() => import('./pages/Home'));

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <div className="d-flex">
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </nav>
                <ThemeToggle/>
            </div>
            <Suspense fallback={'Loading...'}>
                <Routes>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
