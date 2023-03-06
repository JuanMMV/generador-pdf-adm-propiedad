// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import {navigationRef} from './src/controller/NavigationService'
import Home from './src/view/Home'
import {Colors} from './src/Styles/Styles'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ 
            title: 'Documento administracion propiedad',   
            headerStyle:{
              backgroundColor: Colors.backgroundHeaderColor,
             
            },
            headerTintColor: Colors.iconColorInput,
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




