import React from 'react';
import { View } from 'react-native';

import { styles } from './Styles';
import { StatusBar } from 'expo-status-bar';
import { Skill } from '../../components/skill/Skill';
export function Skills() {
    return (
        <View style={styles.container}>
            <Skill />
            <StatusBar style="auto" />
        </View>
    );
}