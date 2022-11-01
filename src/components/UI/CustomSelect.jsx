import Select from 'react-select';

import style from './CustomSelect.module.scss';

function CustomSelect(props) {
    return (
        <Select
            tabIndex={0}
            {...props}
            className={style.customSelect}
            styles={{
                control: (provided, { isFocused }) => ({
                    ...provided,
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    width: '100%',
                    border: 'none',
                    boxShadow: 'none',
                    outline: isFocused ? '1px solid #fff ' : null,
                    ':hover': {
                        borderColor: 'none !important',
                    },
                }),
                option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isSelected
                        ? 'var(--colors-bg)'
                        : state.isFocused
                        ? 'var(--colors-bg)'
                        : null,
                    color: 'var(--colors-text)',
                    cursor: 'pointer',
                    ':hover': {
                        backgroundColor: 'var(--colors-bg)',
                    },
                }),
                menu: provided => ({
                    ...provided,
                    boxShadow: 'var(--shadow)',
                    backgroundColor: 'var(--colors-ui-base)',
                }),
            }}
        />
    );
}
export default CustomSelect;
