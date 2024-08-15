import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { styles } from './Styles';
import { Skill } from '../../components/skill/Skill';
import { skillsConst } from '../../consts/skillsConsts';
export function Skills() {
    const skillsMaped = skillsConst.map((skill, index) => {
        return <Skill key={index} skillName={skill.skillName} skillImage={skill.skillImage} stars={skill.stars} />
    })

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {skillsMaped}
            </ScrollView>
        </SafeAreaView>
    );
}