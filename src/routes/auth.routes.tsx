import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import {Home} from "../screens/Home";
import {SignIn} from "../screens/Signin";
import { AppointmentDetails } from "../screens/AppointmentDetails";

import {Background} from "../components/Background";
import {theme} from "../global/styles/theme";
import {AppointmentCreate} from "../screens/AppointmentCreate";

const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: theme.colors.secondary100
                }
            }}>
            <Screen name="Home" component={Home}/>
            <Screen name="AppointmentDetails" component={AppointmentDetails}/>
            <Screen name="AppointmentCreate" component={AppointmentCreate}/>
        </Navigator>
    )
}
