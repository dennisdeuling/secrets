import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

// Screens
import SecretListScreen from './screens/SecretListScreen';
import SecretDetailScreen from './screens/SecretDetailScreen';
import NewSecretModal from './components/newsecret/NewSecretModal';

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
			<BottomStack.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						const icons = {
							secrets: 'home',
							new: 'plus-circle'
						};
						return <Feather name={icons[route.name.toLowerCase()]} size={size} color={color} />;
					},
					tabBarActiveTintColor: 'tomato',
					tabBarInactiveTintColor: 'gray'
				})}
			>
				<BottomStack.Screen
					name="Secrets"
					component={HomeStackScreen}
					options={{ headerShown: false }}
				/>
				<BottomStack.Screen
					name="New"
					component={NewSecretModal}
					options={{ headerShown: false }}
				/>
			</BottomStack.Navigator>
		</NavigationContainer>
	);
};

export default App;
