import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const commonStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexColumnReverse: {
    flexDirection: 'column-reverse',
  },
  alignItemsStart: {
    alignItems: 'flex-start',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyEvenly: {
    justifyContent: 'space-evenly',
  },
  bgTransparent: {
    backgroundColor: 'transparent',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  horizontalLine: {
    height: 1,
  },
  verticalLine: {
    width: 1,
  },
  absolute: {
    position: 'absolute',
  },
  wFull: {width: '100%'},
  gap4: {gap: 4},
  gap8: {gap: 8},
  gap12: {gap: 12},
  gap16: {gap: 16},
  gap24: {gap: 24},
  mt24: {marginTop: 24},
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.22,

    elevation: 5,
  },
  headerButton: {
    paddingHorizontal: 28,
  },
  padding8: {
    padding: 8,
  },
  paddingHorizontal16: {
    paddingHorizontal: 16,
  },
  paddingVertical4: {
    paddingVertical: 4,
  },
  paddingVertical8: {
    paddingVertical: 8,
  },
  paddingVertical16: {
    paddingVertical: 16,
  },
  paddingVertical24: {
    paddingVertical: 24,
  },
  marginVertical16: {
    marginVertical: 16,
  },
  marginHorizontal16: {
    marginHorizontal: 16,
  },
  paddingScrollHorizontal: {
    paddingHorizontal: 24,
  },
  rtl: {
    transform: [
      {
        scaleX: -1,
      },
    ],
  },
  container: {
    flex: 1,
    backgroundColor: colors.others.white,
  },
});
