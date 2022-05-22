import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

const SecretDetail = ({ id, title, image }) => {
	return (
		<View key={id} style={styles.secretCard}>
			<TouchableOpacity>
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
		width: '100%',
		height: '100%'
	},
	image: {
		justifyContent: 'center',
		width: '100%',
		height: '100%'
	},
	text: {
		fontSize: 50,
		textAlign: 'center',
		color: 'white'
	}
});

export default SecretDetail;
