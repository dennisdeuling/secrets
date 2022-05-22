import React, { useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import data from '../data/data';
import SecretListCard from '../components/secretlistcard/SecretListCard';

const SecretListScreen = ({ navigation }) => {
	const [posts, setPosts] = useState(data);

	return (
		<SafeAreaView>
			<FlatList
				data={posts}
				keyExtractor={item => item.id}
				horizontal={false}
				numColumns={2}
				initialNumToRender={8}
				renderItem={post => {
					return <SecretListCard navigation={navigation} post={post.item} />;
				}}
			/>
		</SafeAreaView>
	);
};

export default SecretListScreen;
