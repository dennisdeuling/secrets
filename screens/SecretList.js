import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';

const SecretList = ({ navigation, posts }) => {
	return (
		<SafeAreaView>
			<ScrollView>
				<View style={styles.container}>
					{posts &&
						posts.map(post => {
							return (
								<View key={post.id} style={styles.secretCard}>
									<ImageBackground
										source={{ uri: post.image }}
										resizeMode="cover"
										style={styles.image}
									>
										<Text style={styles.text}>{post.title}</Text>
									</ImageBackground>
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
		width: 214,
		height: 200
	},
	image: {
		justifyContent: 'center',
		width: 214,
		height: 200
	},
	text: {
		fontSize: 30,
		textAlign: 'center',
		color: 'white'
	}
});
export default SecretList;
