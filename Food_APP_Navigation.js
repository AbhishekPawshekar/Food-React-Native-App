import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main_Page from './Main_Page';
import Food_Details_panel from './Food_Details_panel';
import Food_item_by_category from './Food_item_by_category';

export default function Food_APP_Navigation() {
          const Stack = createNativeStackNavigator();
  return (
          <NavigationContainer>
          <Stack.Navigator initialRouteName="Home"  screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Home" component={Main_Page} options={{orientation:'portrait'}}/>
            <Stack.Screen name="Food_details_panel" component={Food_Details_panel} options={{orientation:'portrait'}}/>
            <Stack.Screen name="Food_item_by_category" component={Food_item_by_category} options={{orientation:'portrait'}}/>
            
            
          </Stack.Navigator>
        </NavigationContainer>
  )
}