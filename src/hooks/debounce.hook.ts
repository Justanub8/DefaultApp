import * as React from 'react'
import { debounce } from 'lodash';

export function useDebouncedCallback<T extends (...args: any[]) => any>(
    callback: T,
    delay: number,
) {
    const callbackRef = React.useRef(callback)
    React.useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);
    const debouncedFunction = React.useMemo(
        () => 
            debounce((...args: Parameters<T>) => {
                return callbackRef.current(...args);
            }, delay),
            [delay]
    );
    React.useEffect(() => {
        return () => {
            debouncedFunction.cancel();
        };
    }, [debouncedFunction]);
    return debouncedFunction;
}