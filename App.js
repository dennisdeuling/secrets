import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import SecretListScreen from './screens/SecretList';
import SecretDetailScreen from './screens/SecretDetailScreen';

const HomeStack = createNativeStackNavigator();
const BottomStack = createBottomTabNavigator();

const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator initialRouteName="SecretListScreen">
			<HomeStack.Screen name="SecretListScreen" component={SecretListScreen} />
			<HomeStack.Screen name="SecretDailScreen" component={SecretDetailScreen} />
		</HomeStack.Navigator>
	);
};

const App = () => {
	return (
		<NavigationContainer>
			<BottomStack.Navigator>
				<BottomStack.Screen
					name="SecretListScreen"
					component={HomeStackScreen}
					options={{ headerShown: false }}
				/>
			</BottomStack.Navigator>
		</NavigationContainer>
	);
};

export default App;
