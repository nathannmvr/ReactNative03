import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Criar from '../pages/criar';
import Home from '../pages/home';
import Turma from '../pages/turma';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown:false}}>
            <Screen 
                name='home'
                component={Home}
            />
            <Screen 
                name='criar'
                component={Criar}
            />
            <Screen 
                name='turma'
                component={Turma}
            />
        </Navigator>
    );
}