import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
	ScrollView,
	ImageBackground,
	TouchableOpacity
} from 'react-native';

import data from '../data/data';

const SecretList = ({ navigation }) => {
	const [posts, setPosts] = useState(data);
	const navDetails = post => {
		return navigation.navigate('SecretDailScreen', { post });
	};
	console.log(posts);
	return (
		<SafeAreaView>
			<ScrollView>
				<View style={styles.container}>
					{posts &&
						posts.map(post => {
							return (
								<View key={post.id} style={styles.secretCard}>
									<TouchableOpacity onPress={() => navDetails(post)}>
										<ImageBackground
											source={{ uri: post.image }}
											resizeMode="cover"
											style={styles.image}
										>
											<Text style={styles.text}>{post.title}</Text>
										</ImageBackground>
									</TouchableOpacity>
								</View>
							);
						})}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center'
	},
	secretCard: {
		justifyContent: 'center',
		width: '50%',
		height: 200
	},
	image: {
		justifyContent: 'center',
		width: '100%',
		height: '100%'
	},
	text: {
		fontSize: 30,
		textAlign: 'center',
		color: 'white'
	}
});

export default SecretList;
