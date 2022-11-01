import { useState } from 'react';

import Control from '../components/Control/Control';
import List from '../components/ListCards/List';

export default function Home({ setCountries, countries }) {
    const [filter, setFilter] = useState({ search: '', region: '' });

    return (
        <div className='container'>
            <Control filter={filter} setFilter={setFilter} />
            <List countries={countries} setCountries={setCountries} filter={filter} />
        </div>
    );
}
