import { colors } from "@themes/colors";
import * as React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet, View } from "react-native";

const ProgressBar = ({
    progress = 0.6,
    width = 44,
    height = 4,
} : {
    progress?: number,
    width?: number,
    height?: number,
}) => {
    const progressWidth = progress * width
    const tintColors = React.useMemo(() => {
        if( progress === 0 ){
            return colors.linearGradient.red;
        }
        if( progress === 1 ){
            return colors.linearGradient.green
        }
        return colors.linearGradient.blue
    }, [progress]);

    const emptyColors = React.useMemo(() => {
        if(progress === 0){
            return colors.transparent.red;
        }
        if(progress === 1){
            return colors.transparent.green;
        }
        return colors.transparent.blue;
    }, [progress]);
    return (
        <View style= {[styles.container, {width, height, backgroundColor: emptyColors}]}>
            <LinearGradient
            start = {{x: 0.0, y: 0.5}}
            end = {{x:1.0, y: 0.5}}
            locations={[0, 1]}
            colors={[tintColors.start, tintColors?.end]}
            style = {[styles.linearGradient, {width: progressWidth, height: height}]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 9999,
        overflow: 'hidden',
    },
    linearGradient: {
        borderRadius: 9999,
        overflow: 'hidden'
    },
})
export default ProgressBar