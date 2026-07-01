import * as React from 'react'
import { create } from 'zustand'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors } from '@themes/colors'
import { commonStyles } from '@themes/commonStyles'
import { SizedBox } from '@components/separate-components'
import Animated, { SlideInUp, SlideOutUp} from 'react-native-reanimated'
import { BaseText } from '@components/rn-components'
import { CheckCircleIcon, InfoCircleBoldIcon } from '@assets/svgs'

type GlobalToastType = {
  visible: boolean,
  text: string,
  timeoutId?: NodeJS.Timeout;
  type?: 'error' | 'success';
  showToast: (toast: {text?: string, type?: 'error' | 'success'}) => void;
  hide: () => void;
}

export const useGlobalToast = create<GlobalToastType>((set,get) => ({
  visible: false,
  text: '',
  type: 'success',
  timeoutId: undefined,
  showToast: ({text, type}: {text?: string, type?: 'error' | 'success'}) => {
    set({visible: true, text, type});
    if (typeof get().timeoutId === 'number') {
      clearTimeout(get().timeoutId)
    }
    const id = setTimeout(() => {
      get().hide();
    },2000);
    set({timeoutId: id});
  },
  hide: () => set({visible: false, text: ''})
}));

const GlobalToast = () => {
  const {visible, text, type } = useGlobalToast();
  const {top} = useSafeAreaInsets();

  return visible && type? (
    <Animated.View
      entering={SlideInUp.duration(200)}
      exiting={SlideOutUp.duration(200)}
      style = {
        [
          styles.containerMobile,
          {
            top,
          }
        ]
      }
    >
      <View
        style = {[
          styles.content,
          {
            backgroundColor: 
              type === 'error'
              ? colors.transparent.red
              : colors.transparent.green
          },
        ]}
      >
        {type === 'error' ? (
          <InfoCircleBoldIcon
            width={18}
            height={18}
            color={colors.alertStatus.error}
          />
        ) : (
          <CheckCircleIcon
            width={18}
            height={18}
            color={colors.alertStatus.success}
          />
        )}
        <SizedBox width={6}/>
        <BaseText 
          color={
            type === 'error' 
            ? colors.alertStatus.error
            : colors.alertStatus.success
          }
        >
          {text}
        </BaseText>
      </View>
    </Animated.View>
  ) : null ;
}

const styles = StyleSheet.create({
  containerMobile: {
    backgroundColor: colors.others.white,
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1000000,
    marginTop: 24,
    left: 24,
    ...commonStyles.shadow,
    borderRadius: 10
  },
  content: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center'
  }
})
const showToast = useGlobalToast.getState().showToast
export { showToast}
export default GlobalToast