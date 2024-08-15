import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/home/Home';
import { Skills } from '../screens/skills/Skills';
import { AntDesign } from "@expo/vector-icons"

const { Navigator, Screen } = createBottomTabNavigator()

export function BottomBar() {
    return (
        <Navigator initialRouteName='home'>
            <Screen name="home" options={{
                title: 'Home',

                tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />
            }} component={Home} />
            <Screen
                name="skills"
                options={{
                    title: 'Skills',
                    tabBarIcon: ({ color }) => <AntDesign name="Trophy" size={24} color={color} />
                }}
                component={Skills} />
        </Navigator>
    )
}