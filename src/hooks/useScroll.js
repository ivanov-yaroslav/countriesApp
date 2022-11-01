import { useEffect, useRef } from 'react';

function useScroll(triggerRef, callback) {
    const observer = useRef();

    useEffect(() => {
        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log('+');
                callback();
            }
        }, {});

        observer.current.observe(triggerRef.current);

        return function () {
            observer.current.unobserve(triggerRef.current);
        };
    }, [triggerRef, callback]);
}

export default useScroll;
