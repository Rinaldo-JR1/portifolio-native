import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './Styles';
import { StatusBar } from 'expo-status-bar';

export function Home() {
    return (
        <View style={styles.container}>
            <Text>Home works</Text>
            <StatusBar style="auto" />

        </View>
    );
}