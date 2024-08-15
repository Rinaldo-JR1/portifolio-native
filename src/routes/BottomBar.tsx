import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/home/Home';
import { Skills } from '../screens/skills/Skills';


const { Navigator, Screen } = createBottomTabNavigator()

export function BottomBar() {
    return (
        <Navigator>
            <Screen name="home" options={{
                title: 'Home'
            }} component={Home} />
            <Screen
                name="skills"
                options={{
                    title: 'Skills'
                }}
                component={Skills} />
        </Navigator>
    )
}