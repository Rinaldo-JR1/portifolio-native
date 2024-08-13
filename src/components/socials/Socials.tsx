import React from 'react';
import { View } from 'react-native';
import { SocialButton } from '../social-button/SocialButton';

import { AntDesign } from '@expo/vector-icons';
import { buttons } from './buttons';

export function Socials() {
    const buildButtons = () => {
        return buttons.map((button) => {
            return (
                <SocialButton
                    buttonBackgroundColor={button.buttonBackgroundColor}
                    icon={button.icon}
                    name={button.name}
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