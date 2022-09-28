import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Binomial from './Binomial'
import Family from './Family'
import Glossary from './Glossary'
import Five from './Five'

import './App.css';

const paths = {
    binomial: 'binomial',
    family: 'family',
    glossary: 'glossary',
    five: 'five'
}

const toTitle = (value) => value[0].toString().toUpperCase().concat(value.slice(1));

export default function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<Menu />} />
                    <Route path={`/${paths.binomial}`} element={<Binomial />} />
                    <Route path={`/${paths.family}`} element={<Family />} />
                    <Route path={`/${paths.glossary}`} element={<Glossary />} />
                    <Route path={`/${paths.five}`} element={<Five />} />
                </Routes>
            </Router>
        </div>
    );
}

function Menu() {
    return <nav >
        <ul>
            <li>
                <Link to={`/${paths.binomial}`}>{toTitle(paths.binomial)}</Link>
            </li>
            <li>
                <Link to={`/${paths.family}`}>{toTitle(paths.family)}</Link>
            </li>
            <li>
                <Link to={`/${paths.glossary}`}>{toTitle(paths.glossary)}</Link>
            </li>
            <li>
                <Link to={`/${paths.five}`}>{toTitle(paths.five)}</Link>
            </li>
        </ul>
    </nav>
}
