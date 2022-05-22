import React from 'react';
import { SafeAreaView } from 'react-native';

import SecretDetail from '../components/secretdetail/SecretDetail';

const SecretDetailScreen = ({ route }) => {
	const { id, title, image } = route.params.post;

	return (
		<SafeAreaView>
			<SecretDetail id={id} title={title} image={image} />
		</SafeAreaView>
	);
};

export default SecretDetailScreen;
