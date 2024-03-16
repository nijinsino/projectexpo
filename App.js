import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home1 from './pages/Home1'; // Import the Home1 component
import Bittermelon from './pages/Bittermelon';
import Brinjal from './pages/Brinjal';
import Onion from './pages/Onion';
import Watermelon from './pages/Watermelon';
import Nitrates from './pages/Nitrates';
import Water from './pages/Water';
import Azospirilium from './pages/Azospirilium';
import Azostobacter from './pages/Azostobacter';
import Aphids from './pages/insects/Aphids';
import Worms from './pages/insects/Worms';
import Hispid from './pages/insects/Hispid';
import Leafhopper from './pages/insects/Leafhopper';
import Fungal from './pages/Diseases.js/Fungal';
import Mosaic from './pages/Diseases.js/Mosaic';
import Leafroll from './pages/Diseases.js/Leafroll';
import Leafspots from './pages/Diseases.js/Leafspots';
import Manure from './pages/Fertilizers/Manure';
import Compost from './pages/Fertilizers/Compost';
import Organic from './pages/Fertilizers/Organic';
import Eggshell from './pages/Fertilizers/Eggshell';
import Image1 from './pages/Image1';
import Image2 from './pages/Image2';
import About from './pages/About1';
import About1 from './pages/About1';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="Home1" component={Home1} />
        <Stack.Screen name="Bittermelon" component={Bittermelon} />
        <Stack.Screen name="Brinjal" component={Brinjal} />
        <Stack.Screen name="Onion" component={Onion} />
        <Stack.Screen name="Watermelon" component={Watermelon} />
        <Stack.Screen name="Nitrates" component={Nitrates} />
        <Stack.Screen name="Water" component={Water} />
        <Stack.Screen name="Azospirilium" component={Azospirilium} />
        <Stack.Screen name="Azostobacter" component={Azostobacter} />
        <Stack.Screen name="Aphids" component={Aphids} />
        <Stack.Screen name="Worms" component={Worms} />
        <Stack.Screen name="Leafhopper" component={Leafhopper} />
        <Stack.Screen name="Hispid" component={Hispid} />
        <Stack.Screen name="Fungal" component={Fungal} />
        <Stack.Screen name="Mosaic" component={Mosaic} />
        <Stack.Screen name="Leafroll" component={Leafroll} />
        <Stack.Screen name="Leafspots" component={Leafspots} />
        <Stack.Screen name="Manure" component={Manure} />
        <Stack.Screen name="Compost" component={Compost} />
        <Stack.Screen name="Organic" component={Organic} />
        <Stack.Screen name="Eggshell" component={Eggshell} />
        <Stack.Screen name="Image1" component={Image1} />
        <Stack.Screen name="Image2" component={Image2} />
        <Stack.Screen name="About1" component={About1} />
       
        
      
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
