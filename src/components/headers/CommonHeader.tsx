import { LightArrowLeftIcon } from "@assets/svgs";
import { BaseText } from "@components/rn-components";
import { useNavigation } from "@react-navigation/native";
import typography from "@themes/typography";
import { colors } from "@themes/colors";
import { commonStyles } from "@themes/commonStyles";
import * as React from 'react'
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CommonHeader = ({
    title,
    RightComponent,
}: {
    title?: string,
    RightComponent?: React.JSX.Element,
}) => {
    const {goBack} = useNavigation();
    const {top} = useSafeAreaInsets();
    return (
        <View style = {{paddingTop: top}}>
            <View style = {styles.container}>
                <TouchableOpacity onPress={goBack}>
                    <LightArrowLeftIcon color={colors.grey.x900}/>
                </TouchableOpacity>
                <BaseText
                ml={16}
                numberOfLines={1}
                style= {commonStyles.flex}
                typography = {typography.heading.x4}>
                {title}
                </BaseText>
                {RightComponent}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey.x300
    }
})

export default CommonHeader