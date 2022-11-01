import { Link } from 'react-router-dom';
import { useEffect, useMemo } from 'react';

import useRequest from '../../hooks/useRequest';
import { ALL_COUNTRIES } from '../../config';
import Spinner from '../Spinner/Spinner';
import Card from './Card';

import style from './List.module.scss';

function List({ filter, setCountries, countries }) {
    const [dataCountries, loading, error] = useRequest(
        () => fetch(ALL_COUNTRIES),
        null,
        countries.length ? false : true
    );

    useEffect(() => {
        if (dataCountries) {
            setCountries(dataCountries);
        }
        // eslint-disable-next-line
    }, [dataCountries]);

    const filterRegionHandler = useMemo(() => {
        if (countries && filter.region.value) {
            return countries.filter(country => country.region.includes(filter.region.value));
        } else return countries;
    }, [filter.region, countries]);

    const filterSearchHandler = useMemo(() => {
        return filterRegionHandler.filter(country =>
            country.name.toLowerCase().includes(filter.search.toLowerCase())
        );
    }, [filter.search, filterRegionHandler]);

    const status = {
        loading: loading ? (
            <div className='status-block'>
                <Spinner />
            </div>
        ) : null,
        notFound:
            !countries.length || !filterSearchHandler.length ? (
                <div className='status-block'>
                    <h2 className='status-title'>No country found :(</h2>
                </div>
            ) : null,
        error: error ? (
            <div className='status-block'>
                <h2 className='status-title'>Oops, something seems to have gone wrong :(</h2>
            </div>
        ) : null,
    };

    return (
        <div className={style.list}>
            {status.loading ||
                status.error ||
                status.notFound ||
                filterSearchHandler.map(country => (
                    <Link key={country.name} to={`country/${country.name}`}>
                        <Card country={country} />
                    </Link>
                ))}
        </div>
    );
}

export default List;
