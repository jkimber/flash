import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { paths } from './constants'
import Menu from './Components/Menu'
import Binomial from './Pages/Binomial'
import Family from './Pages/Family'
import Glossary from './Pages/Glossary'
import Five from './Pages/Five'

import './App.css';

export default function App() {
    return (
        <div className="App">
             <Router>
                <Routes>
                    <Route path='/flash' element={<Menu />} /> 
                    <Route path={`/flash/${paths.binomial}`} element={<Binomial />} />
                    <Route path={`/flash/${paths.family}`} element={<Family />} />
                    <Route path={`/flash/${paths.glossary}`} element={<Glossary />} />
                    <Route path={`/flash/${paths.five}`} element={<Five />} />
                </Routes>
            </Router> 
        </div>
    );
}
