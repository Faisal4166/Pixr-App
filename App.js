import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';

const RootStack = createNativeStackNavigator();
// Navigator Screens
import Navigation from './src/Screens/Navigations/StackNavigation';
import { Provider } from 'react-redux';
import { Store, persistor } from './src/redux/store'

function App() {
  return (
    <>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <NavigationContainer>
              <RootStack.Navigator
                headerMode="none"
                screenOptions={{
                headerShown: false,
              }}>
                <RootStack.Screen name="Navigation" component={Navigation} />
              </RootStack.Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
