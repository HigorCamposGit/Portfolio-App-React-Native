import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types/navigation';
import { MainScreen } from './src/screens/MainScreen';
import { SkillScreen } from './src/screens/SkillScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          headerStyle: { backgroundColor: '#0F172A' },
          headerTintColor: '#F8FAFC',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: 'Perfil' }}
        />
        <Stack.Screen
          name="SkillScreen"
          component={SkillScreen}
          options={{ title: 'Minhas Skills' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}