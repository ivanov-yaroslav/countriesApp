import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import useLocalStorage from '../../hooks/useLocalStorage';

import style from './Header.module.scss';

export default function Header() {
    const [storage, setStorage] = useLocalStorage('dark', 'theme');

    const toggleThemeHandler = () => {
        setStorage(storage === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', storage);
    }, [storage]);

    return (
        <header className={style.header}>
            <div className='container'>
                <div className={style.wrapper}>
                    <h2 className={style.title}>
                        <Link tabIndex={0} to={''}>
                            Where is the world?
                        </Link>
                    </h2>
                    <div
                        tabIndex={0}
                        onKeyUp={e => {
                            if (e.keyCode === 13) {
                                toggleThemeHandler();
                            }
                        }}
                        onClick={toggleThemeHandler}
                        className={style.theme}
                    >
                        {storage === 'light' ? (
                            <IoMoon className={style.icon} />
                        ) : (
                            <IoMoonOutline className={style.icon} />
                        )}
                        <div className={style.text}>{storage} Theme</div>
                    </div>
                </div>
            </div>
        </header>
    );
}
