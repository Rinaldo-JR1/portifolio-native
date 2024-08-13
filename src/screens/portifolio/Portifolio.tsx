import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './Styles';
import { StatusBar } from 'expo-status-bar';

export function Portifolio() {
    return (
        <View style={styles.container}>
            <Text>Portifolio Works</Text>
            <StatusBar style="auto" />
        </View>
    );
}