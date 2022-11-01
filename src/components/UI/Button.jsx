import style from './Button.module.scss';

function Button(props) {
    return (
        <button {...props} type='button' className={style.button}>
            {props.children}
        </button>
    );
}

export default Button;
