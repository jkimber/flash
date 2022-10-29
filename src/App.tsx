import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { paths } from './constants';
import Menu from './Components/Menu';
import Flash from './Pages/Flash';

import './App.css';

export default function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        path="/flash"
                        element={<Menu />}
                    />
                    <Route
                        path={`/flash/${paths.binomial}`}
                        element={<Flash dataType="Binomial" />}
                    />
                    <Route
                        path={`/flash/${paths.glossary}`}
                        element={<Flash dataType="Glossary" />}
                    />
                    <Route
                        path={`/flash/${paths.nutrient}`}
                        element={<Flash dataType="Nutrient" />}
                    />
                </Routes>
            </Router>
        </div>
    );
}
