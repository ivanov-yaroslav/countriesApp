import style from './Card.module.scss';

function Card({ country }) {
    const { name, capital, flags, population, region } = country;

    if (name === 'Russian Federation') {
        flags.svg =
            'https://imgprx.livejournal.net/66466fe4090461aeb14dd130ca8a6d9f954fef4d/MGX22Vtmdftu1Zkbp8D7DEB68zd7WrsE_7kAiIxUn2KABcwYtVg-YKxwfZUwqdPI2Qqr6vl5Q1N1jl4lmwEPPG55zIX_nsKFKFfwezWW1X7rEymxbX0xOVAaf3rbx-JNl7qBfE-G-g4PDTEFm5HkFbxX5lhjw70eXnZGHSSBw98';
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
