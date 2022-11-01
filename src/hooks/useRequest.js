import { useState, useEffect } from 'react';

function useRequest(request, trigger, start = true) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(start);
    const [error, setError] = useState('');
    const [startValue, setStartValue] = useState(false);

    useEffect(() => {
        if (startValue || start) {
            setLoading(true);
            request()
                .then(response => response.json())
                .then(json => setData(json))
                .catch(error => setError(error))
                .finally(() => setLoading(false));
            return;
        }
        if (!start) {
            setStartValue(true);
            setLoading(false);
            return;
        }
    }, [trigger]);

    return [data, loading, error];
}

export default useRequest;
