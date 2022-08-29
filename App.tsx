
import useCachedResources from './hooks/useCachedResources';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { StatusBar } from 'react-native';


export default function App() {
  const Stack = createNativeStackNavigator();
  const isLoadingComplete = useCachedResources();


  

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
            </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    );
  }
}
