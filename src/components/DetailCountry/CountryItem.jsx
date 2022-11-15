import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { filterByCode } from '../../config';
import countryRus from '../../img/Russian-Pig.jpg';

import style from './CountryItem.module.scss';

function CountryItem({ country }) {
    const [neighbors, setNeighbors] = useState([]);
    const [error, setError] = useState(null);
    const {
        name,
        capital,
        flags,
        nativeName,
        region,
        subregion,
        population,
        languages = [],
        topLevelDomain,
        currencies = [],
        borders = [],
    } = country;

    if (name === 'Russian Federation') {
        flags.svg = countryRus;
    }

    useEffect(() => {
        if (borders.length) {
            fetch(filterByCode(borders))
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .then(json => setNeighbors(json.map(country => country.name)))
                .catch(error => setError(error));
        }
    }, [borders]);

    return (
        <div className={style.wrapper}>
            <div className={style.image}>
                <img src={flags.svg} alt={name} />
            </div>
            <div className={style.content}>
                <h1 className={style.title}>{name}</h1>
                <div className={style.info}>
                    <ul className={style.infoList}>
                        <li className={style.infoItem}>
                            Native Name: <span>{nativeName}</span>
                        </li>
                        <li className={style.infoItem}>
                            Population: <span>{population.toLocaleString()}</span>
                        </li>
                        <li className={style.infoItem}>
                            Region: <span>{region}</span>
                        </li>
                        <li className={style.infoItem}>
                            Sub Region: <span>{subregion}</span>
                        </li>
                        <li className={style.infoItem}>
                            Capital:{' '}
                            <span>{capital ? capital : <span>Тo information found:(</span>}</span>
                        </li>
                    </ul>
                    <ul className={style.infoList}>
                        <li className={style.infoItem}>
                            Top Level Domain:{' '}
                            {topLevelDomain.length ? (
                                topLevelDomain.map(domain => <span key={domain}>{domain} </span>)
                            ) : (
                                <span>Тo information found:(</span>
                            )}
                        </li>
                        <li className={style.infoItem}>
                            Currency:{' '}
                            {currencies.length ? (
                                currencies.map(currency => (
                                    <span key={currency.code}>{currency.name} </span>
                                ))
                            ) : (
                                <span>Тo information found:(</span>
                            )}
                        </li>
                        <li className={style.infoItem}>
                            Languages:{' '}
                            {languages.length ? (
                                languages.map(language => (
                                    <span key={language.name}>{language.name} </span>
                                ))
                            ) : (
                                <span>Тo information found:(</span>
                            )}
                        </li>
                    </ul>
                </div>
                <div className={style.border}>
                    <h5 className={style.borderTitle}>
                        Border Countries:{' '}
                        {!borders.length ? (
                            <span>there is no border countries</span>
                        ) : error ? (
                            <span>Oops, something seems to have gone wrong :(</span>
                        ) : null}
                    </h5>
                    <ul className={style.borderList}>
                        {!error &&
                            !!neighbors.length &&
                            neighbors.map(border => (
                                <Link key={border} to={`/country/${border}`}>
                                    <li className={style.borderItem}>{border}</li>
                                </Link>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CountryItem;
