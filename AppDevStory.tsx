import {LockIcon, MessageIcon} from '@assets/svgs';
import {PrimaryButton, SecondaryButton} from '@components/buttons';
import TextButton from '@components/buttons/TextButton';
import {PrimaryField, SwitchField} from '@components/fields';
import {
  alert,
  hideGlobalLoading,
  showGlobalLoading,
  showToast,
} from '@components/globals';
import {CommonHeader} from '@components/headers';
import {MultipleLineInput, PrimaryInput} from '@components/inputs';
import {MenuDropdown} from '@components/menu';
import {BaseText} from '@components/rn-components';
import {SizedBox} from '@components/separate-components';
import {colors, commonStyles, typography} from '@themes';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, View} from 'react-native';
function App(): React.JSX.Element {
  const {t} = useTranslation();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View style={commonStyles.container}>
      <CommonHeader />
      <ScrollView>
        <BaseText textAlign="center" typography={typography.bodyRegular.xLarge}>
          {t('common.company_name')}
        </BaseText>
        <BaseText mt={4} textAlign="center" typography={typography.heading.x4}>
          {'NGỌC TUẤN - NAGAOKA'}
        </BaseText>
        <SizedBox height={28} />
        <PrimaryInput
          value={username}
          onChangeText={setUsername}
          LeftComponent={MessageIcon}
          placeholder={t('login.user_name')}
        />
        <SizedBox height={24} />
        <PrimaryInput
          value={password}
          onChangeText={setPassword}
          LeftComponent={LockIcon}
          placeholder={t('login.password')}
        />
        <SwitchField title="Trạng thái Bluetooth" />
        <PrimaryField
          title="Các thiết bị ở gần"
          value="Không có"
          RightComponent={
            <TextButton
              color={colors.primary.x500}
              typography={typography.bodyBold.large}
              title="Gọi ngay"
            />
          }
        />
        <SizedBox height={24} />
        <MenuDropdown
          archon={<MessageIcon />}
          archonContainerStyle={commonStyles.alignSelfStart}
          options={[
            {
              id: 'sync',
              Icon: MessageIcon,
              title: 'Đồng bộ dữ liệu',
              onPress() {
                showGlobalLoading();
                setTimeout(() => {
                  hideGlobalLoading();
                }, 500);
              },
              iconColor: colors.alertStatus.success,
            },
            {
              id: 'logout',
              Icon: MessageIcon,
              title: 'Đăng xuất',
              onPress() {},
              iconColor: colors.alertStatus.error,
            },
          ]}
        />
        <PrimaryButton
          onPress={() => {
            alert({
              title: {
                text: 'Đồng bộ dữ liệu',
                textProps: {
                  typography: typography.heading.x4,
                  color: colors.primary.x500,
                  textAlign: 'center',
                },
              },
              message: {
                text: 'Tất cả dữ liệu khách hàng lưu trong ứng dụng sẽ bị xoá',
              },
              buttons: [
                {
                  id: 'back',
                  title: 'Quay lại',
                  titleColor: colors.primary.x500,
                  color: colors.transparent.blue,
                  onPress() {
                    showGlobalLoading();
                    setTimeout(() => {
                      hideGlobalLoading();
                    }, 1000);
                  },
                },
                {
                  id: 'start',
                  title: 'Bắt đầu',
                  titleColor: colors.others.white,
                  color: colors.primary.x500,
                  onPress() {},
                },
              ],
            });
          }}
          disabled={false}
          title={t('login.button')}
        />
        <SizedBox height={24} />
        <SecondaryButton
          onPress={() => {
            showToast({type: 'success', text: 'Lỗi rồi bro'});
          }}
          LeftAccessory={
            <MessageIcon width={20} height={20} color={colors.primary.x500} />
          }
          disabled={false}
          title={t('login.button')}
        />
        <SizedBox height={24} />

        <TextButton
          color={colors.primary.x500}
          typography={typography.bodyBold.xxLarge}
          textDecorationLine="underline"
          title="T.2"
        />
        <MultipleLineInput placeholder="Nhập ghi chú" />
        <BaseText typography={typography.heading.x1}>{'Heading 1'}</BaseText>
        <BaseText typography={typography.heading.x2}>{'Heading 2'}</BaseText>
        <BaseText typography={typography.heading.x3}>{'Heading 3'}</BaseText>
        <BaseText typography={typography.heading.x4}>{'Heading 4'}</BaseText>
        <BaseText typography={typography.heading.x5}>{'Heading 5'}</BaseText>
        <BaseText typography={typography.heading.x6}>{'Heading 6'}</BaseText>
        {/*  Body  */}
        <BaseText typography={typography.heading.x6}>{'Body'}</BaseText>
        {/*  xLarge  */}
        <BaseText typography={typography.bodyBold.xLarge}>{'xLarge'}</BaseText>
        <BaseText typography={typography.bodySemiBold.xLarge}>
          {'xLarge'}
        </BaseText>
        <BaseText typography={typography.bodyMedium.xLarge}>
          {'xLarge'}
        </BaseText>
        <BaseText typography={typography.bodyRegular.xLarge}>
          {'xLarge'}
        </BaseText>
        {/*  Large  */}
        <BaseText typography={typography.bodyBold.large}>{'Large'}</BaseText>
        <BaseText typography={typography.bodySemiBold.large}>
          {'Large'}
        </BaseText>
        <BaseText typography={typography.bodyMedium.large}>{'Large'}</BaseText>
        <BaseText typography={typography.bodyRegular.large}>{'Large'}</BaseText>
        {/*  Medium  */}
        <BaseText typography={typography.bodyBold.medium}>{'Medium'}</BaseText>
        <BaseText typography={typography.bodySemiBold.medium}>
          {'Medium'}
        </BaseText>
        <BaseText typography={typography.bodyMedium.medium}>
          {'Medium'}
        </BaseText>
        <BaseText typography={typography.bodyRegular.medium}>
          {'Medium'}
        </BaseText>
        {/*  Small  */}
        <BaseText typography={typography.bodyBold.small}>{'Small'}</BaseText>
        <BaseText typography={typography.bodySemiBold.small}>
          {'Small'}
        </BaseText>
        <BaseText typography={typography.bodyMedium.small}>{'Small'}</BaseText>
        <BaseText typography={typography.bodyRegular.small}>{'Small'}</BaseText>
        {/*  xSmall  */}
        <BaseText typography={typography.bodyBold.xSmall}>{'xSmall'}</BaseText>
        <BaseText typography={typography.bodySemiBold.xSmall}>
          {'xSmall'}
        </BaseText>
        <BaseText typography={typography.bodyMedium.xSmall}>
          {'xSmall'}
        </BaseText>
        <BaseText typography={typography.bodyRegular.xSmall}>
          {'xSmall'}
        </BaseText>
      </ScrollView>
    </View>
  );
}

export default App;
