import { useCallback, useRef } from 'react';

function useDebounce(callback, delay) {
    const timer = useRef();

    const debouncedCallback = useCallback(
        (...arg) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }

            timer.current = setTimeout(() => {
                callback(...arg);
            }, delay);
        },
        [callback, delay]
    );

    return debouncedCallback;
}

export default useDebounce;
