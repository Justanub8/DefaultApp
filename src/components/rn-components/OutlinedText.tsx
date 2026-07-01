import * as React from 'react';
import {StyleSheet, TextStyle, View} from 'react-native';
import Svg, {Text} from 'react-native-svg';
import BaseText, {BaseTextProps} from './BaseText';
import {colors as Colors} from '@themes/colors';

interface LinearTextProps extends BaseTextProps {
  color?: string;
  outlineColor?: string;
}

const OutlinedText = ({
  color = Colors.others.red,
  outlineColor = Colors.others.white,
  ...props
}: LinearTextProps) => {
  const style = props?.style as TextStyle;
  const [layout, setLayout] = React.useState({width: 0, height: 0});
  return (
    <View>
      {layout.height > 0 && layout?.width > 0 && (
        <Svg
          style={styles.svg}
          height={layout.height}
          width={layout.width + layout.width * 0.02}>
          <Text
            fontSize={style?.fontSize}
            fontWeight={style?.fontWeight}
            fontFamily={style?.fontFamily}
            fill={color}
            strokeLinejoin="bevel"
            strokeLinecap="round"
            // x={layout.height}
            y={layout.height * 0.79}
            stroke={outlineColor}
            strokeWidth={1.4}
            textAnchor="start">
            {props.children}
          </Text>
          <Text
            fontSize={style?.fontSize}
            fontWeight={style?.fontWeight}
            fontFamily={style?.fontFamily}
            fill={color}
            strokeLinejoin="bevel"
            strokeLinecap="round"
            // x={layout.height}
            y={layout.height * 0.79}
            stroke={'transparent'}
            strokeWidth={1.4}
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

export default OutlinedText;
