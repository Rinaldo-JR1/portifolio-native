import React from 'react';
import { View } from 'react-native';
import { SocialButton } from '../social-button/SocialButton';

import { buttons } from '../../consts/buttons';

export function Socials() {
    const buildButtons = () => {
        return buttons.map((button, index) => {
            return (
                <SocialButton
                    key={index}
                    {...button}
                />
            )
        })
    }
    return (
        <View style={{ justifyContent: "center", alignItems: "center", gap: 14 }}>
            {buildButtons()}
        </View>
    );
}