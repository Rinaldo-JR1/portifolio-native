import { SkillProps } from "../interfaces/skillProps/SkillProps";
import reactLogo from '../../assets/skills/react.png';
import angularLogo from '../../assets/skills/angular.png';
import nodeLogo from '../../assets/skills/node.png';
import reactNativeLogo from '../../assets/skills/react-native.png'
import springLogo from '../../assets/skills/spring.png'
import dotNetLogo from '../../assets/skills/net.png'

export const skillsConst: SkillProps[] = [
    {
        skillName: "React",
        skillImage: reactLogo,
        stars: 5
    },
    {
        skillName: "NodeJs",
        skillImage: nodeLogo,
        stars: 5
    },
    {
        skillName: "React Native",
        skillImage: reactNativeLogo,
        stars: 5
    },
    {
        skillName: "Angular",
        skillImage: angularLogo,
        stars: 4.5
    },
    {
        skillName: ".NET",
        skillImage: dotNetLogo,
        stars: 4.5
    },
    {
        skillName: "Spring",
        skillImage: springLogo,
        stars: 4
    },


]