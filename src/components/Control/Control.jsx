import style from './Control.module.scss';

import Search from '../UI/Search';
import CustomSelect from '../UI/CustomSelect';

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
];

function Control({ filter, setFilter }) {
    return (
        <div className={style.control}>
            <Search filter={filter} setFilter={setFilter} />
            <CustomSelect
                options={options}
                placeholder='Filter by Region'
                isClearable
                isSearchable={false}
                value={filter.region}
                onChange={e => setFilter({ ...filter, region: e ? e : '' })}
            />
        </div>
    );
}

export default Control;
