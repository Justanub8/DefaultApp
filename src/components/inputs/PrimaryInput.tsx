import { BaseTextInput, BaseTextInputProps } from "@components/rn-components";
import { SizedBox } from "@components/separate-components";
import { colors } from "@themes/colors";
import { commonStyles } from "@themes/commonStyles";
import * as React from 'react'
import { StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { SvgProps } from "react-native-svg";
import { useState, useMemo } from "react";
import typography from "@themes/typography";
interface PrimaryInputProps extends BaseTextInputProps {
    RightComponent?: React.FC<SvgProps>;
    LeftComponent?: React.FC<SvgProps>;
}
const PrimaryInput = ({
    LeftComponent,
    RightComponent,
    ...textProps
}: PrimaryInputProps) => {
    const [isFocused, setIsFocused] = useState(false)
    const ref = React.useRef<TextInput>(null);
    const iconColor = useMemo(() => {
        if (isFocused) {
            return colors.primary.x500;
        }
        if (textProps?.value){
            return colors.grey.x900;
        }
        return colors.grey.x500;
    }, [textProps?.value, isFocused])
    return (
        <TouchableOpacity
        onPress={() => {
            ref.current?.focus();
        }}
        activeOpacity={0.7}
        style = {[styles.container, isFocused && styles.focused]}
        >
            {!!LeftComponent && ( 
            <>
                {<LeftComponent width={20} height={20} color={iconColor}/>}
                <SizedBox width={12} />
            </>
            )}
            <BaseTextInput
                ref = { ref}
                typography = {
                    textProps?.value
                    ? typography.bodySemiBold.large
                    : typography.bodyRegular.large
                }
                placeholderTextColor={colors.grey.x500}
                style = {commonStyles.flex}
                onFocus={() => {
                    setIsFocused(true);
                }}
                onBlur={() => {
                    setIsFocused(false)
                }}
                {...textProps}
            />
            {!!RightComponent && (
                <>
                    <SizedBox width={12}/>
                    {<RightComponent width={20} height={20} color={iconColor} />}
                </>
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 16,
        backgroundColor: colors.grey.x200,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.transparent.blue,
    },
    focused : {
        borderColor: colors.primary.x500,
        backgroundColor: colors.transparent.blue,
    }
});

export default PrimaryInput