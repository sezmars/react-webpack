import React, {lazy, Suspense} from "react";
import {NavLink, Route, Routes} from "react-router-dom";

const About = lazy(() => import('./pages/About'));
const Home = lazy(() => import('./pages/Home'));

const App = () => {
    return (
        <div className="app">
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink  to='/about'>About</NavLink>
            </nav>
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
