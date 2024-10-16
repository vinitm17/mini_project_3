import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import CartProducts from './Screens/CartProducts'; // Import CartProducts
import ProfileScreen from './Screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const CartStack = createStackNavigator();

function CartStackNavigator() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen 
        name="CartScreen" 
        component={CartScreen} 
        options={{ title: '' }} 
      />
      <CartStack.Screen 
        name="CartProducts" 
        component={CartProducts} 
        options={{ title: 'My Cart' }} 
      />
    </CartStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }} 
        />
        <Tab.Screen 
          name="Cart" 
          component={CartStackNavigator}  // Use the CartStackNavigator here
          options={{ title: 'Cart' }} 
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: 'Profile' }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
