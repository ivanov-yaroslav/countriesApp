import Control from '../components/Control/Control';
import List from '../components/ListCards/List';

export default function Home({ setCountries, countries, filter, setFilter }) {
    return (
        <div className='container'>
            <Control filter={filter} setFilter={setFilter} />
            <List countries={countries} setCountries={setCountries} filter={filter} />
        </div>
    );
}
