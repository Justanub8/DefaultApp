import * as React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { colors } from '@themes/colors'

const FlexLoadingView = () => {
    return (
        <View style= {styles.container}>
            <ActivityIndicator color={colors.primary.x500}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
})
export default FlexLoadingView