import { BaseText, BaseTextProps } from "@components/rn-components";
import { colors } from "@themes/colors";
import typography from "@themes/typography";
import * as React from 'react'
import { StyleSheet, View } from "react-native";

const SecondaryField = ({
    title,
    titleProps = {
        color: colors.others.white,
        typography: typography.bodyMedium.large
    },
    valueProps = {
        color: colors.others.white,
        typography: typography.bodySemiBold.xLarge
    },
    value,
}:{
    title?: string,
    titleProps?: BaseTextProps;
    valueProps?: BaseTextProps;
    value?: string,
}) => { return(
    <View style= {styles.container}>
        <BaseText {...titleProps}>
            {title}
        </BaseText>
        <BaseText {...valueProps}>
            {value}
        </BaseText>
    </View>
)}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default SecondaryField