import { BaseText, BaseTextInput, BaseTextInputProps } from "@components/rn-components";
import { SizedBox } from "@components/separate-components";
import { colors } from "@themes/colors";
import typography from "@themes/typography";
import { commonStyles } from "@themes/commonStyles";
import * as React from 'react'
import { StyleSheet, TextInput, View, ViewStyle } from "react-native";

const PrimaryField = ({
    title,
    value,
    RightComponent,
    paddingVertical,
    disabled = true,
    autofocus = true,
    onChangeText,
    keyboardType,
    inputRef,
    valueColor,
} : {
    title?: string,
    value?: string,
    paddingVertical?: ViewStyle['paddingVertical'];
    RightComponent?: React.JSX.Element,
    disabled?: boolean,
    autofocus?: boolean,
    keyboardType?: BaseTextInputProps['keyboardType'],
    onChangeText?(text: string): void;
    inputRef?: React.RefObject<TextInput | null>;
    valueColor?: string;
}) => {
    return(
        <View style = {[styles.container, {paddingVertical}]}>
            <View style = {commonStyles.flex}>
                <BaseText 
                    color = {colors.grey.x700}
                    typography = {typography.bodyMedium.medium}
                >
                    {title}
                </BaseText>
                <SizedBox height={10}/>
                <View>
                    {!disabled ? (
                        <BaseTextInput
                        ref={inputRef}
                        style={commonStyles.flex}
                        color={colors.grey.x900}
                        typography={typography.bodyBold.xxLarge}
                        value={value}
                        autoFocus={autofocus}
                        keyboardType={keyboardType}
                        onChangeText={ v => {
                            if(onChangeText) {
                                const textWithoutComa = v.replace(/,/g, '');
                                const split = textWithoutComa?.split('.')
                                onChangeText(split.slice(0,2)?.join('.'))
                            }
                        }}
                        /> 
                    ) : (
                        <BaseText
                        color={!valueColor ? colors.grey.x900 : valueColor}
                        typography={typography.bodyBold.xxLarge}>
                            {value}
                        </BaseText>
                    )}
                </View>
            </View>
            {RightComponent}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default PrimaryField