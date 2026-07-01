import * as React from 'react'
import { StyleSheet, View, Pressable, TextInput, ViewStyle, StyleProp, TextInputProps } from 'react-native'
import typography from '@themes/typography'
import { colors } from '@themes/colors'
import { BaseTextInput } from '@components/rn-components'

interface MultipleLineInputProps extends TextInputProps{
    maxLine?: number,
    containerStyle?: StyleProp<ViewStyle>,
    disabled?: boolean;
}

const MultipleLineInput = ({
    maxLine = 3,
    containerStyle,
    disabled,
    ...restProps
}: MultipleLineInputProps) =>{
    const [isFocused, setIsFocused] = React.useState(false)
    const ref = React.useRef<TextInput>(null);
    return (
        <Pressable
        disabled = { disabled}
        onPress={() => {
            ref.current?.focus();        
            }}
            style = {[
                styles.message,
                isFocused && styles.focused,
                {
                    minHeight: 28 + 22.4* maxLine
                },
                containerStyle
            ]}>
            <BaseTextInput
            multiline = {true}
            ref = {ref}
            numberOfLines={3}
            lineHeight={22.4}
            typography={typography.bodySemiBold.large}
            color={colors.grey.x900}
            placeholderTextColor={colors.grey.x500}
            onFocus={() => {
                setIsFocused(true);
            }}
            onBlur={() => {
                setIsFocused(false);
            }}
            {...restProps}/>
            {disabled && 
            <View style={[styles.disabled]}/>
    
            }
        </Pressable>
    )
}

const styles = StyleSheet.create({
    message: {
        borderRadius: 16,
        backgroundColor: colors.grey.x50,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderWidth: 1,
        borderColor: colors.grey.x50,
    },
    focused: {
        borderColor: colors.primary.x500,
        backgroundColor: colors.transparent.blue
    },
    disabled: {
        ...StyleSheet.absoluteFill,
        zIndex: 100,
    },
})

export default MultipleLineInput