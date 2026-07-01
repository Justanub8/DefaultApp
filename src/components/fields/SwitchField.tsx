import { BaseSwitch, BaseText } from "@components/rn-components";
import { SizedBox } from "@components/separate-components";
import { colors } from "@themes/colors";
import { commonStyles } from "@themes/commonStyles";
import typography from "@themes/typography";
import * as React from 'react';
import { StyleSheet, View } from "react-native";
import { useTranslation } from 'react-i18next'
const SwitchField = ({
    title,
    value,
    onValueChange,
} : {
    title?: string,
    value?: boolean,
    onValueChange?(value: boolean): void 
}) => {
    const {t} = useTranslation();
    return (
        <View style = {styles.container}>
            <BaseText typography = {typography.bodyMedium.medium}>
                {title}
            </BaseText>
            <SizedBox height={16}/>
            <View
                style = {[
                    commonStyles.flexRow,
                    commonStyles.alignItemsCenter
                ]}
            >
                <BaseText
                    style = {commonStyles.flex}
                    color = { value ? colors.alertStatus.success : colors.alertStatus.error}
                    typography = {typography.bodySemiBold.xLarge}
                >
                    {value ? t('common.on') : t('common.off') }
                </BaseText>
                <BaseSwitch value = {value} onValueChange={onValueChange}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
});

export default SwitchField