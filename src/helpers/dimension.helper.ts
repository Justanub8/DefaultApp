import { Dimensions, PixelRatio } from "react-native";
const guidelineBaseWidth = 430;
const guidelinBaseHeight = 888;
const pixelDensity = PixelRatio.get() * 160;
const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height
const widthInches = widthScreen/pixelDensity
const heightInches = heightScreen/pixelDensity

const screenSizeInches = Math.sqrt(widthInches ** 2 + heightInches ** 2)
const scale = (size: number) => (widthScreen / guidelineBaseWidth)
const verticalScale = (size: number) => (heightScreen / guidelinBaseHeight) * size;
const dimensions = {
    guidelinBaseHeight,
    guidelineBaseWidth,
    widthScreen,
    heightScreen,
    scale,
    verticalScale,
    screenSizeInches
}

export default dimensions