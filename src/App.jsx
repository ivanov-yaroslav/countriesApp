import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Details from './pages/Details';

import './style/App.scss';

function App() {
    const [filter, setFilter] = useState({ search: '', region: '' });
    const [countries, setCountries] = useState([]);

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route
                    path=''
                    element={
                        <Home
                            countries={countries}
                            setCountries={setCountries}
                            filter={filter}
                            setFilter={setFilter}
                        />
                    }
                />
                <Route path='country/:name' element={<Details />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
