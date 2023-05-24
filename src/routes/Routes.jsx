import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './AppRoutes';
import { View } from 'react-native';

export function Routes() {
    return (
        <View className='flex-1 bg-gray-800'>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>
    );
}