import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import useRequest from '../../hooks/useRequest';
import { searchByCountry } from '../../config';

import Button from '../UI/Button';
import Spinner from '../Spinner/Spinner';
import CountryItem from './CountryItem';

import style from './Country.module.scss';

function Country(props) {
    const nameParams = useParams();
    const navigate = useNavigate();
    const [dataCountries, loading, error] = useRequest(
        () => fetch(searchByCountry(nameParams.name)),
        nameParams
    );
    const [country, setCountry] = useState([]);

    const status = {
        loading: loading ? (
            <div className='status-block'>
                <Spinner />
            </div>
        ) : null,
        notFound:
            !country.length || !dataCountries.length ? (
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

    useEffect(() => {
        if (dataCountries) {
            setCountry(dataCountries.filter(dataCountry => dataCountry.name === nameParams.name));
        }
    }, [dataCountries, nameParams]);

    return (
        <div className={style.country}>
            <Button onClick={() => navigate(-1)}>
                <AiOutlineArrowLeft />
                Back
            </Button>
            {status.loading || status.error || status.notFound || (
                <CountryItem country={country[0]} />
            )}
        </div>
    );
}

export default Country;
