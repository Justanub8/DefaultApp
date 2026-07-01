import React, { PropsWithChildren} from 'react'
import { View, ViewStyle } from 'react-native'
import {colors} from '@themes/colors';

type Props = {
    width?: ViewStyle['width'];
    height?: ViewStyle['height'];
    backgroundColor?: string;
    borderRadius?: number; 
};
const SizedBox = ({
    width = 0,
    height = 0,
    backgroundColor= colors.others.transparent,
    children,
    borderRadius,
}: PropsWithChildren<Props>) => {
    return(
        <View 
        style = {{
            width: width,
            height: height,
            backgroundColor,
            borderRadius,
        }}
        >
            {children}
        </View>
    )
}

export default SizedBox