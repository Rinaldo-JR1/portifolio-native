import React from 'react';
import { Image, Text, View } from 'react-native';
import rinaldo from "../../../assets/profile/rinaldo.jpeg";

import { styles } from './Styles';

export function Profile() {
    return (
        <View style={styles.container}>
            <Image source={rinaldo} style={{ width: 200, height: 200, borderRadius: 100 }} />
            <Text style={styles.name}>Rinaldo Uchoa</Text>
            <Text style={styles.description}>
                Desenvolvedor Junior
            </Text>
        </View>
    );
}