import { colors } from "@themes/colors";
import * as React from 'react'
import { ActivityIndicator, StyleSheet, View } from "react-native";

const CoverLoadingView = () => {
    return (
        <View style = { styles.container}>
            <ActivityIndicator color={colors.primary.x500}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFill,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        backgroundColor: colors.transparent.loading
    }
})
export default CoverLoadingView