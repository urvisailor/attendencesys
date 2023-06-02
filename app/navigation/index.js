import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import Dashboard from '../screens/dashboard';
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator initialRouteName='login' screenOptions={{headerShown:false}}>
            <Stack.Screen
                name="login"
                component={Login}
            />
            <Stack.Screen name="dashboard" component={Dashboard} />
        </Stack.Navigator>
    );
};

export default Navigation