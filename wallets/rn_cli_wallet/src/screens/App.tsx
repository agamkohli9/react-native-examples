import React from 'react';
import {ENV_SENTRY_DSN} from '@env';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Sentry from '@sentry/react-native';

import OnboardingScreen from './OnboardingScreen';
import HomeScreen from './HomeScreen';
import SettingsScreen from './Settings';
import SessionDetail from './SessionDetail';
import {RootStackParamList} from '../utils/TypesUtil';

if (!__DEV__) {
  Sentry.init({
    dsn: ENV_SENTRY_DSN,
  });
}

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="SessionDetail"
          component={SessionDetail}
          options={{headerShown: true, headerTitle: 'Session Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
