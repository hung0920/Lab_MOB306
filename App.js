import * as React from 'react';
import Manager from './Manager';
// import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screen/Home';
import Info from './src/Screen/Info';
import List from './src/Screen/List';
import ProductScreen from './src/Screen/Product';

// function HomeScreen(props) {
//   const navigation = props.navigation;
//   return (
//     <View>
//       <Button
//         title='Sang Manager'
//         onPress={() => navigation.navigate('Manager')}
//       />
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Info' component={Info}/>
        <Stack.Screen name='UserList' component={List}/>
        <Stack.Screen name='Manager' component={Manager}/>
        <Stack.Screen name='Product' component={ProductScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;