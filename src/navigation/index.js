import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgetPasswordScreen from '../screens/ForgetPassword/ForgetPasswordScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name='SignIn' component={SignInScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false }} />
                <Stack.Screen name='ForgetPassword' component={ForgetPasswordScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation