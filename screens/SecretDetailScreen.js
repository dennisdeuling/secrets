import React from 'react';
import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	ImageBackground,
	StyleSheet
} from 'react-native';

const SecretDetailScreen = ({ navigation, route }) => {
	console.log(route.params.post);
	const { id, title, image } = route.params.post;

	return (
		<SafeAreaView>
			<View key={id} style={styles.secretCard}>
				<TouchableOpacity>
					<ImageBackground source={{ uri: image }} resizeMode="cover" style={styles.image}>
						<Text style={styles.text}>{title}</Text>
					</ImageBackground>
				</TouchableOpacity>
			</View>
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

export default SecretDetailScreen;
