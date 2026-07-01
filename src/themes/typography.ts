import {StyleSheet} from 'react-native';
import fontFamily from './fontFamily';

const heading = StyleSheet.create({
  x1: {
    fontFamily: fontFamily.sfProDisplay.bold,
    fontSize: 48,
    fontWeight: 'bold',
  },
  x2: {
    fontFamily: fontFamily.sfProDisplay.bold,
    fontSize: 40,
    fontWeight: 'bold',
  },
  x3: {
    fontFamily: fontFamily.sfProDisplay.bold,
    fontSize: 32,
    fontWeight: 'bold',
  },
  x4: {
    fontFamily: fontFamily.sfProDisplay.bold,
    fontSize: 24,
    fontWeight: 'bold',
  },
  x5: {
    fontFamily: fontFamily.sfProDisplay.bold,
    fontSize: 20,
    fontWeight: 'bold',
  },
  x6: {
    fontFamily: fontFamily.sfProDisplay.bold,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const bodyBold = StyleSheet.create({
  xxLarge: {
    fontFamily: fontFamily.sfProDisplay.bold,
    fontSize: 20,
    fontWeight: 'bold',
  },
  xLarge: {
    fontFamily: fontFamily.sfProDisplay.bold,
    fontSize: 18,
    fontWeight: 'bold',
  },
  large: {
    fontFamily: fontFamily.sfProDisplay.bold,
    fontSize: 16,
    fontWeight: 'bold',
  },
  medium: {
    fontFamily: fontFamily.sfProDisplay.bold,
    fontSize: 14,
    fontWeight: 'bold',
  },
  small: {
    fontFamily: fontFamily.sfProDisplay.bold,
    fontSize: 12,
    fontWeight: 'bold',
  },
  xSmall: {
    fontFamily: fontFamily.sfProDisplay.bold,
    fontSize: 10,
    fontWeight: 'bold',
  },
});

const bodySemiBold = StyleSheet.create({
  xxLarge: {
    fontFamily: fontFamily.sfProDisplay.semibold,
    fontSize: 20,
    fontWeight: 'semibold',
  },
  xLarge: {
    fontFamily: fontFamily.sfProDisplay.semibold,
    fontSize: 18,
    fontWeight: 'semibold',
  },
  large: {
    fontFamily: fontFamily.sfProDisplay.semibold,
    fontSize: 16,
    fontWeight: 'semibold',
  },
  medium: {
    fontFamily: fontFamily.sfProDisplay.semibold,
    fontSize: 14,
    fontWeight: 'semibold',
  },
  small: {
    fontFamily: fontFamily.sfProDisplay.semibold,
    fontSize: 12,
    fontWeight: 'semibold',
  },
  xSmall: {
    fontFamily: fontFamily.sfProDisplay.semibold,
    fontSize: 10,
    fontWeight: 'semibold',
  },
});

const bodyMedium = StyleSheet.create({
  xxLarge: {
    fontFamily: fontFamily.sfProDisplay.medium,
    fontSize: 20,
    fontWeight: 'medium',
  },
  xLarge: {
    fontFamily: fontFamily.sfProDisplay.medium,
    fontSize: 18,
    fontWeight: 'medium',
  },
  large: {
    fontFamily: fontFamily.sfProDisplay.medium,
    fontSize: 16,
    fontWeight: 'medium',
  },
  medium: {
    fontFamily: fontFamily.sfProDisplay.medium,
    fontSize: 14,
    fontWeight: 'medium',
  },
  small: {
    fontFamily: fontFamily.sfProDisplay.medium,
    fontSize: 12,
    fontWeight: 'medium',
  },
  xSmall: {
    fontFamily: fontFamily.sfProDisplay.medium,
    fontSize: 10,
    fontWeight: 'medium',
  },
});

const bodyRegular = StyleSheet.create({
  xxLarge: {
    fontFamily: fontFamily.sfProDisplay.regular,
    fontSize: 20,
    fontWeight: 'regular',
  },
  xLarge: {
    fontFamily: fontFamily.sfProDisplay.regular,
    fontSize: 18,
    fontWeight: 'regular',
  },
  large: {
    fontFamily: fontFamily.sfProDisplay.regular,
    fontSize: 16,
    fontWeight: 'regular',
  },
  medium: {
    fontFamily: fontFamily.sfProDisplay.regular,
    fontSize: 14,
    fontWeight: 'regular',
  },
  small: {
    fontFamily: fontFamily.sfProDisplay.regular,
    fontSize: 12,
    fontWeight: 'regular',
  },
  xSmall: {
    fontFamily: fontFamily.sfProDisplay.regular,
    fontSize: 10,
    fontWeight: 'regular',
  },
});

export default {heading, bodyBold, bodyMedium, bodyRegular, bodySemiBold};
