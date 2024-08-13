import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/home/Home';
import { Portifolio } from '../screens/portifolio/Portifolio';


const { Navigator, Screen } = createBottomTabNavigator()

export function BottomBar() {
    return (
        <Navigator>
            <Screen name="home" component={Home} />
            <Screen name="portifolio" component={Portifolio} />
        </Navigator>
    )
}