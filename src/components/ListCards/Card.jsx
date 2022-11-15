import countryRus from '../../img/Russian-Pig.jpg';

import style from './Card.module.scss';

function Card({ country }) {
    const { name, capital, flags, population, region } = country;

    if (name === 'Russian Federation') {
        flags.svg = countryRus;
    }

    return (
        <article className={style.card}>
            <div className={style.image}>
                <img src={flags.svg} alt={name} />
            </div>
            <div className={style.content}>
                <div className={style.title}>{name}</div>
                <div className={style.info}>
                    <div className={style.item}>
                        Population: <span>{population.toLocaleString()}</span>
                    </div>
                    <div className={style.item}>
                        Region: <span>{region}</span>
                    </div>
                    <div className={style.item}>
                        Capital: <span>{capital}</span>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Card;
