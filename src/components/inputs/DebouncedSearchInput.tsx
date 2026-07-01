import * as React from 'react';
import { useDebouncedCallback } from "@hooks/debounce.hook";
import PrimaryInput from './PrimaryInput';
import { SearchLightIcon } from '@assets/svgs';

const DebouncedSearchInput = ({ value, onChangeText, placeholder, ...props }: any) => {
    const [localValue, setLocalValue] = React.useState(value);
    
    const debouncedOnChange = useDebouncedCallback((text: string) => {
        onChangeText(text);
    }, 500);

    const handleChange = (text: string) => {
        setLocalValue(text);
        debouncedOnChange(text);
    };

    React.useEffect(() => {
        setLocalValue(value);
    }, [value]);

    return (
        <PrimaryInput 
            value={localValue}
            onChangeText={handleChange}
            LeftComponent={SearchLightIcon}
            placeholder={placeholder}
            {...props}
        />
    );
};

export default DebouncedSearchInput;
