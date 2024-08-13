import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { styles } from './Styles';

export function SocialButton({ buttonBackgroundColor, icon, name }: SocialButtonProps) {
    return (
        <Pressable style={[styles.container, { backgroundColor: buttonBackgroundColor }]}>
            <View style={{ marginRight: 10 }}>
                {icon}
            </View>
            <Text style={styles.iconName}>{name}</Text>
        </Pressable>
    );
}