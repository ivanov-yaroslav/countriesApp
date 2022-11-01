import style from './Search.module.scss';
import { IoSearch } from 'react-icons/io5';

function Search(props) {
    const { filter, setFilter } = props;

    return (
        <label className={style.search}>
            <IoSearch className={style.icon} />
            <input
                className={style.input}
                type='search'
                value={filter.search}
                placeholder='Search for a country...'
                onChange={e => setFilter({ ...filter, search: e.target.value })}
            />
        </label>
    );
}

export default Search;
