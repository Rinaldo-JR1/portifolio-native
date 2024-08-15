import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './Styles';
import { StarList } from '../star-list/StarList';
import { SkillProps } from '../../interfaces/skillProps/SkillProps';

export function Skill({ skillImage, skillName, stars }: SkillProps) {
    return (
        <>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image source={skillImage} style={{ width: 130, height: 130 }} />
            </View>
            <View style={styles.stats}>
                <Text>{skillName}</Text>
                <StarList stars={stars} />
            </View>
        </>
    );
}