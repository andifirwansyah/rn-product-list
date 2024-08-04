import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Order, NewOrder, OrderDetail, EditOrder} from '@scenes';
import {AppStackParamList} from 'types/navigation';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Order">
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="NewOrder" component={NewOrder} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
      <Stack.Screen name="EditOrder" component={EditOrder} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
