import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecretList from './screens/SecretList';
import SecretDetailScreen from './screens/SecretDetailScreen';
import data from './data/data';

const Stack = createNativeStackNavigator();

const App = () => {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		setPosts(data);
		// fetch('https://jsonplaceholder.typicode.com/posts')
		// 	.then(response => response.json())
		// 	.then(json => setPosts(json))
		// 	.catch(error => error);
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="SecretList">
				<Stack.Screen name="SecretList">
					{props => <SecretList {...props} posts={posts} />}
				</Stack.Screen>
				<Stack.Screen name="SecretDailScreen" component={SecretDetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
