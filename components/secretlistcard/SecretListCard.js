import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';

const SecretListCard = ({ navigation, post }) => {
	const { id, image, title } = post;
	const navDetails = post => {
		return navigation.navigate('SecretDailScreen', { post });
	};
	return (
		<View key={id} style={styles.secretCard}>
			<TouchableOpacity onPress={() => navDetails(post)}>
				<ImageBackground source={{ uri: image }} resizeMode="cover" style={styles.image}>
					<Text style={styles.text}>{title}</Text>
				</ImageBackground>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
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

export default SecretListCard;
