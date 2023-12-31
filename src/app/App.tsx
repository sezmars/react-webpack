import React, {lazy, Suspense} from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import useTheme from "app/providers/theme/useTheme";
import ThemeToggle from "shared/ui/theme-toogle/ThemeToggle";
import {classNames} from "shared/lib/classNames/classNames";

const About = lazy(() => import('../pages/about/About'));
const Home = lazy(() => import('../pages/home/Home'));

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
