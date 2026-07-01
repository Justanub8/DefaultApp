import * as React from 'react';
import {StyleSheet, TextStyle, View} from 'react-native';
import Svg, {Defs, LinearGradient, Stop, Text} from 'react-native-svg';
import BaseText, {BaseTextProps} from './BaseText';
import {colors as Colors} from '@themes/colors';

interface LinearTextProps extends BaseTextProps {
  colors?: {start: string; end: string};
}

const LinearText = ({
  colors = Colors.linearGradient.green,
  ...props
}: LinearTextProps) => {
  const style = props?.style as TextStyle;
  const [layout, setLayout] = React.useState({width: 0, height: 0});
  return (
    <View>
      {layout.height > 0 && layout?.width > 0 && (
        <Svg style={styles.svg} height={layout.height} width={layout.width}>
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0" stopColor={colors?.end} stopOpacity="1" />
              <Stop offset="1" stopColor={colors?.start} stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Text
            fontSize={style?.fontSize}
            fontWeight={style?.fontWeight}
            fontFamily={style?.fontFamily}
            fill="url(#grad)"
            // x={layout.height}
            y={layout.height * 0.79}
            textAnchor="start">
            {props.children}
          </Text>
        </Svg>
      )}
      <BaseText
        onLayout={({nativeEvent}) => {
          setLayout(nativeEvent.layout);
        }}
        style={{...style, color: Colors.others.transparent}}>
        {props.children}
      </BaseText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  svg: {
    ...StyleSheet.absoluteFill,
    zIndex: 100,
  },
});

export default LinearText;
