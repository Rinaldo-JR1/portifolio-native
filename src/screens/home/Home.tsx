import React from 'react';
import { View } from 'react-native';

import { styles } from './Styles';
import { StatusBar } from 'expo-status-bar';
import { Profile } from '../../components/profile/Profile';
import { Socials } from '../../components/socials/Socials';
export function Home() {
    return (
        <View style={styles.container}>
            <Profile />
            <Socials />
            <StatusBar style="auto" />
        </View>
    );
}