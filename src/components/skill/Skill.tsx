import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './Styles';
import { StarList } from '../star-list/StarList';
import reactLogo from '../../../assets/skills/react.png'

export function Skill() {
    return (
        <>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image source={reactLogo} style={{ width: 150, height: 150 }} />
            </View>
            <View style={styles.stats}>
                <Text>React</Text>
                <StarList stars={5} />
            </View>
        </>
    );
}