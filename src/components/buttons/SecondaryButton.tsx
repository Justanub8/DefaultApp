import * as React from 'react'
import PrimaryButton, {PrimaryButtonProps} from './PrimaryButton' 
import typography from '@themes/typography'
import { colors } from '@themes/colors'
import { StyleSheet } from 'react-native'

interface SecondaryButtonProps extends PrimaryButtonProps {}
const SecondaryButton = (props: SecondaryButtonProps) => {
    return (
        <PrimaryButton
            borderColor={colors.primary.x500}
            color={colors.others.white}
            textColor={colors.primary.x400}
            textProps={{
                typography: typography.bodyBold.xLarge,
                style: {letterSpacing: 0.2}
            }}
            style = {styles.buttonStyle}
            {...props}
        />
    )
}
const styles = StyleSheet.create({
    buttonStyle: {
        paddingVertical: 12,
    },
});

export default SecondaryButton