import { NavigationContainer } from '@react-navigation/native';

import { BottomBar } from './BottomBar';

export function Routes() {
    return (
        <NavigationContainer>
            <BottomBar />
        </NavigationContainer>
    );
}