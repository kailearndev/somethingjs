import React, { useEffect, useState } from 'react';

const useDebounce =<T> ( value: T, delay?: number ) => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const time = setTimeout(() => setDebouncedValue(value), delay || 500 )
        return () => {
            clearTimeout(time)  
        }
        

    },[value, delay])
    return debouncedValue
};

export default useDebounce;