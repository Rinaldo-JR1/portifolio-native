import React from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { Linking } from 'react-native'

import { styles } from './Styles';

export function SocialButton({ buttonBackgroundColor, icon, name, url }: SocialButtonProps) {
    const onPress = async () => {
        if (await Linking.canOpenURL(url)) {
            Linking.openURL(url)
        } else {
            Alert.alert("Erro", "Não foi possível abrir o link")
        }
    }

    return (
        <Pressable onPress={onPress} style={[styles.container, { backgroundColor: buttonBackgroundColor }]}>
            <View style={{ marginRight: 10 }}>
                {icon}
            </View>
            <Text style={styles.iconName}>{name}</Text>
        </Pressable>
    );
}